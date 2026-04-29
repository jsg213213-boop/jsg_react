import { useState, useEffect } from 'react';

const AutoTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 타이머 함수를 정의
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // cleanup 함수 자리.
    return () => {
      clearInterval(interval); // 언마운트 시 타이머 정리
    };
  }, []);

  return (
    <div>
      <h3>경과 시간 : {count}</h3>
    </div>
  );
};

export default AutoTimer;