import React, { memo } from 'react';

import { useState } from 'react';

// TODO: 이 컴포넌트에 memo를 적용하세요
// memo가 부모로부터 받는 props 비교만 최적화합니다.
// 그래서, 컴포넌트 자신의 state가 바뀌면 리렌더합니다.

const Child = memo(function Child({ name, score }) {
  console.log('Child 렌더 — name:', name, 'score:', score);
  return (
    <div
      style={{
        marginTop: 12,
        padding: 12,
        border: '1px solid #dee2e6',
        borderRadius: 8,
      }}
    >
      <p>이름: {name}</p>
      <p>점수: {score}</p>
    </div>
  );
});

const Ex3 = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childScore, setChildScore] = useState(100);

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Q3 — memo 적용</h1>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <button type="button" onClick={() => setParentCount((c) => c + 1)}>
          부모만 리렌더 ({parentCount})
        </button>
        <button type="button" onClick={() => setChildScore((s) => s + 10)}>
          자식 점수 변경 ({childScore})
        </button>
      </div>
      <Child name="김철수" score={childScore} />
    </div>
  );
};

export default Ex3;
