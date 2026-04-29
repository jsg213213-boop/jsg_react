import { useState, useEffect } from 'react';

const AutoTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 타이머 함수를 정의
    console.log('렌더링이 완료되었습니다!-마운트효과.');
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // cleanup 함수 자리.
    return () => {
      console.log('언마운트:화면에서 제거- cleanup 함수효과.');
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