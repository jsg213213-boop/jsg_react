import { useState, useMemo, useCallback } from 'react';

// 1. 연산 최적화 확인용 함수
const getAverageBasic = (numbers) => {
  console.log('🔴 [useMemo 미사용] 연산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

const getAverage2 = (numbers) => {
  console.log('🟢 [useMemo 사용] 연산 중!');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

const AverageCompare = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // ---------------------------------------------------------
  // ❌ [useCallback 사용 전] 일반 함수들
  // 컴포넌트가 리렌더링될 때마다 매번 새로운 함수 객체가 생성됩니다.
  const onChangeBasic = (e) => {
    console.log('❌ [일반 onChange] 함수 새로 생성됨');
    setNumber(e.target.value);
  };

  const onInsertBasic = () => {
    console.log('❌ [일반 onInsert] 함수 새로 생성됨');
    const parsed = parseInt(number, 10);
    if (isNaN(parsed)) return;
    setList(list.concat(parsed));
    setNumber('');
  };

  // ✅ [useCallback 사용 후] 최적화 함수들
  // 의존성 배열의 값이 변하지 않으면 기존에 만들어진 함수를 재사용합니다.
  const onChangeOptimized = useCallback((e) => {
    console.log('✅ [useCallback onChange] 함수 재사용 중');
    setNumber(e.target.value);
  }, []);

  const onInsertOptimized = useCallback(() => {
    console.log('✅ [useCallback onInsert] 함수 재사용 중');
    const parsed = parseInt(number, 10);
    if (isNaN(parsed)) return;
    setList(list.concat(parsed));
    setNumber('');
  }, [number, list]);
  // ---------------------------------------------------------

  const avgBasic = getAverageBasic(list);
  const avgMemo = useMemo(() => getAverage2(list), [list]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>useCallback 사용 전/후 비교</h2>
      <p style={{ color: '#666' }}>F12 콘솔창을 열고 타이핑을 해보세요!</p>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* 사용 전 구역 */}
        <div style={{ flex: 1, border: '1px solid #ffcccc', padding: '15px', borderRadius: '8px' }}>
          <h3 style={{ color: 'red' }}>1. 사용 전 (일반)</h3>
          <input
            value={number}
            onChange={onChangeBasic}
            placeholder="입력 시마다 함수 생성"
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          />
          <button onClick={onInsertBasic} style={{ width: '100%' }}>추가 (일반)</button>
        </div>

        {/* 사용 후 구역 */}
        <div style={{ flex: 1, border: '1px solid #ccffcc', padding: '15px', borderRadius: '8px' }}>
          <h3 style={{ color: 'green' }}>2. 사용 후 (useCallback)</h3>
          <input
            value={number}
            onChange={onChangeOptimized}
            placeholder="함수 재사용"
            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
          />
          <button onClick={onInsertOptimized} style={{ width: '100%' }}>추가 (최적화)</button>
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '8px' }}>
        <h4>결과 리스트: {JSON.stringify(list)}</h4>
        <div style={{ color: 'red' }}>🔴 미최적화 평균: {avgBasic}</div>
        <div style={{ color: 'green' }}>🟢 최적화 평균: {avgMemo}</div>
      </div>
    </div>
  );
};

export default AverageCompare;