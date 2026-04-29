import { useState, useMemo } from 'react';

// 🔴 1. useMemo 미사용 시 호출될 함수
const getAverageBasic = (numbers) => {
  console.log('🔴 [useMemo 미사용] 숫자를 입력할 때마다 계속 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

// 🟢 2. useMemo 사용 시 호출될 함수
const getAverageOptimized = (numbers) => {
  console.log('🟢 [useMemo 사용] 리스트에 추가될 때만 딱 한 번 계산 중!');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

const AverageCompare = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onInsert = () => {
    const parsed = parseInt(number, 10);
    if (isNaN(parsed)) return;
    setList(list.concat(parsed));
    setNumber(''); // 입력창 초기화
  };

  // =====================================================
  // ⛔ [비교 1] useMemo 미사용
  // number state가 바뀌어 컴포넌트가 리렌더링될 때마다 무조건 실행됨
  const avgBasic = getAverageBasic(list);

  // ✅ [비교 2] useMemo 사용
  // 의존성 배열 [list]에 적힌 값이 바뀔 때만 함수를 실행하고,
  // 평소에는 이전에 '기억(memo)'해둔 결과값을 그대로 재사용함
  const avgMemo = useMemo(() => getAverageOptimized(list), [list]);
  // =====================================================

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>useMemo 성능 최적화 비교</h2>

      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="숫자 입력 후 추가 클릭"
        style={{ padding: '5px', marginRight: '5px' }}
      />
      <button onClick={onInsert} style={{ padding: '6px 12px' }}>
        추가
      </button>

      <ul
        style={{
          background: '#f4f4f4',
          padding: '10px 25px',
          borderRadius: '5px',
        }}
      >
        {list.length === 0 ? (
          <li>값이 없습니다.</li>
        ) : (
          list.map((val, i) => <li key={i}>{val}</li>)
        )}
      </ul>

      <div style={{ marginTop: '15px', lineHeight: '1.8' }}>
        <div style={{ color: 'red' }}>
          <b>🔴 최적화 X 결과:</b> {avgBasic}
        </div>
        <div style={{ color: 'green' }}>
          <b>🟢 최적화 O 결과:</b> {avgMemo}
        </div>
      </div>

      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        * F12 개발자 도구를 열고 input 창에 숫자를 입력해 보세요.
        <br />* 입력할 때마다 🔴빨간색 로그는 계속 찍히지만, 🟢초록색 로그는
        찍히지 않습니다!
      </p>
    </div>
  );
};

export default AverageCompare;
