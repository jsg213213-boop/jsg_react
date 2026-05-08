import { useState } from 'react';

function createBulkTodos() {
  console.log('createBulkTodos 실행'); // 이 로그가 몇 번 출력되나요?
  const array = [];
  for (let i = 1; i <= 2500; i += 1) {
    array.push({ id: i, text: `할 일${i}`, checked: false });
  }
  return array;
}

const Ex1 = () => {
  const [renderTick, setRenderTick] = useState(0);
  // 전 : createBulkTodos() , 함수를 매번 실행하는 효과
  // 후 : createBulkTodos , 함수 자체를 전달해서, lazy initializer
  const [todos, setTodos] = useState(createBulkTodos); // 🐛 버그!

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Q1 — 버그 버전</h1>
      <button
        type="button"
        onClick={() => setRenderTick((n) => n + 1)}
        style={{ padding: '8px 16px', marginBottom: 16 }}
      >
        리렌더 +1 (현재: {renderTick})
      </button>
      <p>todos 개수: {todos.length}</p>
    </div>
  );
};

export default Ex1;
