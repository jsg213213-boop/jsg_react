import { useState, useMemo } from 'react';

// 🔴 1. useMemo 미사용 시 호출될 함수 (매 리렌더링마다 실행)
const getMaxBasic = (numbers) => {
  console.log('🔴 [최적화 X] 숫자를 입력할 때마다 계속 최댓값 찾는 중...');
  if (numbers.length === 0) return 0;
  return Math.max(...numbers);
};

// 🟢 2. useMemo 사용 시 호출될 함수 (list가 바뀔 때만 실행)
const getMaxOptimized = (numbers) => {
  console.log('🟢 [최적화 O] 리스트에 숫자가 추가될 때만 최댓값 계산!');
  if (numbers.length === 0) return 0;
  return Math.max(...numbers);
};

const MaxCompare = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onInsert = () => {
    const parsed = parseInt(number, 10);
    if (isNaN(parsed)) return;
    setList(list.concat(parsed));
    setNumber(''); 
  };

  // ⛔ [비교 1] useMemo 미사용: 타이핑할 때마다 실행됨
  const maxBasic = getMaxBasic(list);

  // ✅ [비교 2] useMemo 사용: list 배열이 변경될 때만 재계산
  const maxMemo = useMemo(() => getMaxOptimized(list), [list]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>최댓값(Max) useMemo 최적화 비교</h2>

      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="숫자 입력 후 추가 클릭"
        style={{ padding: '8px', marginRight: '5px' }}
      />
      <button onClick={onInsert} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        추가
      </button>

      <div style={{ margin: '15px 0', padding: '10px', background: '#f9f9f9', borderRadius: '5px' }}>
        <strong>현재 숫자 목록:</strong> [ {list.join(', ')} ]
      </div>

      <div style={{ lineHeight: '2' }}>
        <div style={{ color: '#e74c3c' }}>
          <b>🔴 최적화 X (Max):</b> {maxBasic}
        </div>
        <div style={{ color: '#27ae60' }}>
          <b>🟢 최적화 O (Max):</b> {maxMemo}
        </div>
      </div>

      <div style={{ marginTop: '20px', fontSize: '13px', color: '#7f8c8d', borderTop: '1px dashed #ccc', paddingTop: '10px' }}>
        💡 <b>테스트 방법:</b> 개발자 도구(F12) 콘솔을 확인하며 숫자를 입력해 보세요. <br />
        입력창에 숫자를 쓸 때는 🔴 로그만 찍히고, <b>추가</b> 버튼을 누를 때만 🟢 로그가 찍힙니다.
      </div>
    </div>
  );
};

export default MaxCompare;