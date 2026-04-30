import { useState, useMemo, useCallback, useEffect } from 'react';

const getAverage = (numbers) => {
  console.log('평균 계산 실행');

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
};

// ===============================
// 1. useCallback 사용 전
// ===============================
const AverageBefore = () => {
  console.log('Before 컴포넌트 렌더링');

  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    console.log('Before onChange 실행');
    setNumber(e.target.value);
  };

  const onInsert = () => {
    console.log('Before onInsert 실행');

    const nextList = list.concat(parseInt(number, 10));
    setList(nextList);
    setNumber('');
  };

  useEffect(() => {
    console.log('Before onChange 함수 생성됨');
  }, [onChange]);

  useEffect(() => {
    console.log('Before onInsert 함수 생성됨');
  }, [onInsert]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div style={{ border: '1px solid gray', padding: 16, marginBottom: 20 }}>
      <h2>useCallback 사용 전</h2>

      <input value={number} onChange={onChange} placeholder="숫자 입력" />
      <button onClick={onInsert}>추가</button>

      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>

      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

// ===============================
// 2. useCallback 사용 후
// ===============================
const AverageAfter = () => {
  console.log('After 컴포넌트 렌더링');

  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback((e) => {
    console.log('After onChange 실행');
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    console.log('After onInsert 실행');

    const nextList = list.concat(parseInt(number, 10));
    setList(nextList);
    setNumber('');
  }, [number, list]);

  useEffect(() => {
    console.log('After onChange 함수 생성됨');
  }, [onChange]);

  useEffect(() => {
    console.log('After onInsert 함수 생성됨');
  }, [onInsert]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div style={{ border: '1px solid gray', padding: 16 }}>
      <h2>useCallback 사용 후</h2>

      <input value={number} onChange={onChange} placeholder="숫자 입력" />
      <button onClick={onInsert}>추가</button>

      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>

      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

// ===============================
// 3. 비교용 부모 컴포넌트
// ===============================
const Average2 = () => {
  return (
    <div>
      <h1>useCallback 전 / 후 비교</h1>

      <AverageBefore />
      <AverageAfter />
    </div>
  );
};

export default Average2;
