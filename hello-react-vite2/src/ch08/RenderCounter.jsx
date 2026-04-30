import { useState, useRef, useEffect } from 'react';

const RenderCounter = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // 초기 렌더링을 1로 시작

  useEffect(() => {
    // 컴포넌트가 업데이트될 때마다 current 값을 1씩 증가
    renderCount.current += 1;
    console.log(`현재까지 렌더링된 횟수: ${renderCount.current}`);
  });

  return (
    <div>
      <p>State 값: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        클릭 (State 변경 및 재렌더링)
      </button>
    </div>
  );
};

export default RenderCounter;