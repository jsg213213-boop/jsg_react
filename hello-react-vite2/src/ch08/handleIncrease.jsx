import { useState, useCallback } from 'react';

const Counter3 = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // 1️⃣ [handleIncrease]
  // count 상태에 의존하므로, count가 변경될 때만 함수가 새로 생성됩니다.
  const handleIncrease = useCallback(() => {
    console.log('➕ handleIncrease 생성/재사용');
    setCount((prevCount) => prevCount + 1);
  }, []); // 함수형 업데이트(prev)를 사용하면 의존성 배열을 비워둘 수 있어 더 최적화됩니다.

  // 2️⃣ [handleDecrease]
  // 이전 값을 직접 참조하지 않고 함수형 업데이트를 사용하여 최적화했습니다.
  const handleDecrease = useCallback(() => {
    console.log('➖ handleDecrease 생성/재사용');
    setCount((prevCount) => prevCount - 1);
  }, []);

  // 3️⃣ [handleReset]
  // 초기화 함수는 외부 상태에 의존할 필요가 없으므로 처음 렌더링 시 한 번만 생성됩니다.
  const handleReset = useCallback(() => {
    console.log('🔄 handleReset 생성/재사용');
    setCount(0);
  }, []);

  return (
    <div style={{ padding: '30px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#2c3e50' }}>{count}</h1>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <button 
          onClick={handleIncrease}
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#e3f2fd', border: '1px solid #2196f3' }}
        >
          증가 (+)
        </button>
        <button 
          onClick={handleDecrease}
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#fff3e0', border: '1px solid #ff9800' }}
        >
          감소 (-)
        </button>
        <button 
          onClick={handleReset}
          style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#ffebee', border: '1px solid #f44336' }}
        >
          초기화
        </button>
      </div>

      <hr />

      {/* 최적화 확인용 토글 버튼 */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setToggle(!toggle)}>
          컴포넌트 리렌더링 시키기 (현재 상태: {toggle ? 'ON' : 'OFF'})
        </button>
        <p style={{ color: '#666', fontSize: '12px' }}>
          * 리렌더링 버튼을 눌러도 콘솔을 보시면 함수들이 새로 생성되지 않고 재사용되는 것을 확인할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default Counter3;