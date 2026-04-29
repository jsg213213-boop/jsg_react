import { useState, useEffect } from 'react';

const AutoTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1초마다 count를 1씩 증가시키는 타이머 설정
    const interval = setInterval(() => {
      // 함수형 업데이트를 사용하여 이전 state 값을 정확히 참조
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // 언마운트 시 실행될 Cleanup 함수
    return () => {
      console.log('타이머가 종료되었습니다.');
      clearInterval(interval);
    };
  }, []); // 마운트될 때 타이머 시작, 언마운트될 때 정리

  return (
    <div>
      <h3>자동 타이머: {count}초</h3>
    </div>
  );
};

export default AutoTimer;