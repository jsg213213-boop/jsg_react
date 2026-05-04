import  { useState } from 'react';
import './Practice.css'; // CSS 파일명도 맞춰주세요!

const Practice = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="card">
      <h2 className="card__title">연습용 카운터</h2>
      
      <p className="card__content">
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      
      <div className="card__actions">
        <button 
          className="card__button" 
          onClick={() => setValue(value + 2)}
        >
          +1
        </button>
        <button 
          className="card__button" 
          onClick={() => setValue(value - 2)}
        >
          -1
        </button>
        <button 
          className="card__button" 
          onClick={() => setValue(0)}
        >
          초기화
        </button>
      </div>
    </div>
  );
};

export default Practice;