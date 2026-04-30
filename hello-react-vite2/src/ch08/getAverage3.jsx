import { useState, useRef } from 'react';

const GetAverage3 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const inputEl = useRef(null);

  const onInsert = () => {
    const parsed = parseInt(number, 10);

    if (isNaN(parsed)) {
      // 숫자가 아닐 경우 포커스 후 종료
      inputEl.current?.focus();
      return;
    }

    setList((prevList) => prevList.concat(parsed));
    setNumber('');

    // 등록 후 다시 입력창에 포커스
    inputEl.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputEl}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="숫자 입력"
      />

      <button onClick={onInsert}>추가</button>

      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetAverage3;