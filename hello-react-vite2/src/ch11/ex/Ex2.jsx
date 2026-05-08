import React from 'react';

import { useState } from 'react';

function Child({ name }) {
  console.log('[Child] 렌더됨 — name:', name);
  return (
    <div style={{ padding: 12, border: '1px solid #ccc' }}>자식: {name}</div>
  );
}

const Ex2 = () => {
  const [count, setCount] = useState(0);
  console.log('[App] 렌더됨');
  return (
    <div style={{ padding: 24 }}>
      <h1>Q2 — 리렌더 조건 파악</h1>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        App 카운트 +1 ({count})
      </button>
      <Child name="고정이름" />
    </div>
  );
};

export default Ex2;
