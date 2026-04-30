import { useState, useCallback } from 'react';

const Counter3 = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // ---------------------------------------------------------
  // ❌ 1. useCallback 사용 전 (일반 함수)
  // 토글 버튼을 눌러 리렌더링될 때마다 매번 함수가 새로 메모리에 할당됩니다.
  const handleIncreaseBasic = () => {
    console.log('🔴 [일반] handleIncrease 생성됨');
    setCount(count + 1);
  };

  const handleDecreaseBasic = () => {
    console.log('🔴 [일반] handleDecrease 생성됨');
    setCount(count - 1);
  };
  // ---------------------------------------------------------

  // ✅ 2. useCallback 사용 후 (최적화 함수)
  // 리렌더링이 되어도 의존성 배열([])이 비어있으므로 처음 만든 함수를 계속 재사용합니다.
  const handleIncreaseOptimized = useCallback(() => {
    console.log('🟢 [useCallback] handleIncrease 재사용 중');
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleDecreaseOptimized = useCallback(() => {
    console.log('🟢 [useCallback] handleDecrease 재사용 중');
    setCount((prevCount) => prevCount - 1);
  }, []);

  const handleReset = useCallback(() => {
    console.log('🔄 [useCallback] handleReset 재사용 중');
    setCount(0);
  }, []);

  return (
    <div style={{ padding: '30px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#2c3e50' }}>{count}</h1>
      
      {/* 1. 일반 함수 버튼 구역 */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ffcccc' }}>
        <p><strong>미최적화 (일반 함수)</strong></p>
        <button onClick={handleIncreaseBasic} style={{ marginRight: '5px' }}>일반 증가 (+)</button>
        <button onClick={handleDecreaseBasic}>일반 감소 (-)</button>
      </div>

      {/* 2. 최적화 함수 버튼 구역 */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccffcc' }}>
        <p><strong>최적화 (useCallback)</strong></p>
        <button onClick={handleIncreaseOptimized} style={{ marginRight: '5px' }}>최적화 증가 (+)</button>
        <button onClick={handleDecreaseOptimized} style={{ marginRight: '5px' }}>최적화 감소 (-)</button>
        <button onClick={handleReset}>초기화</button>
      </div>

      <hr />

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setToggle(!toggle)} style={{ padding: '10px', backgroundColor: '#eee' }}>
          단순 리렌더링 발생시키기 (현재: {toggle ? 'ON' : 'OFF'})
        </button>
        <p style={{ color: '#666', fontSize: '13px', marginTop: '10px' }}>
          <b>테스트 방법:</b> 하단 버튼을 눌러 리렌더링을 시킨 뒤 콘솔을 보세요.<br />
          일반 함수는 로그가 찍히지 않아도 내부적으로 계속 재생성되지만,<br />
          최적화 함수는 메모리 주소를 유지하여 성능을 방어합니다.
        </p>
      </div>
    </div>
  );
};

export default Counter3;