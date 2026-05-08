import { memo, useCallback, useState } from 'react';

// TODO: memo 적용하기
// 전
// function TodoItem({ todo, onToggle }) {
//   console.log('TodoItem 렌더:', todo.text);
//   return (
//     <li
//       style={{
//         padding: '8px 0',
//         borderBottom: '1px solid #eee',
//         display: 'flex',
//         gap: 8,
//         alignItems: 'center',
//       }}
//     >
//       <span style={{ cursor: 'pointer' }} onClick={() => onToggle(todo.id)}>
//         {todo.checked ? '✅' : '⬜'}
//       </span>
//       <span>{todo.text}</span>
//     </li>
//   );
// }

// 후
const TodoItem = memo(function TodoItem({ todo, onToggle }) {
  console.log('TodoItem 렌더:', todo.text);
  return (
    <li
      style={{
        padding: '8px 0',
        borderBottom: '1px solid #eee',
        display: 'flex',
        gap: 8,
        alignItems: 'center',
      }}
    >
      <span style={{ cursor: 'pointer' }} onClick={() => onToggle(todo.id)}>
        {todo.checked ? '✅' : '⬜'}
      </span>
      <span>{todo.text}</span>
    </li>
  );
});

//전
// function TodoList({ todos, onToggle }) {
//   console.log('TodoList 렌더');
//   return (
//     <ul style={{ listStyle: 'none', padding: 0 }}>
//       {todos.map((todo) => (
//         <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
//       ))}
//     </ul>
//   );
// }

//후
// TODO: memo 적용하기
const TodoList = memo(function TodoList({ todos, onToggle }) {
  console.log('TodoList 렌더');
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

let nextId = 4;

const Ex6 = () => {
  console.log('Ex6 렌더');
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부', checked: false },
    { id: 2, text: '운동', checked: false },
    { id: 3, text: '독서', checked: false },
  ]);
  const [input, setInput] = useState('');

  // TODO: useCallback 적용하기
  const onToggle = useCallback((id) => {
    // useCallback 를 사용하면, 함수를 재생성 안함.
    // onToggle 함수를 이용할 때는, 로그는 찍힙니다.!!
    console.log('onToggle useCallback 렌더');
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t)),
    );
  }, []);

  const onAdd = useCallback(() => {
    console.log('onAdd useCallback 렌더');
    if (!input.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: nextId++, text: input, checked: false },
    ]);
    setInput('');
  }, [input]);

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui', maxWidth: 400 }}>
      <h1>Q6 — 이중 memo</h1>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일 입력"
          style={{ flex: 1, padding: '8px 12px' }}
        />
        <button type="button" onClick={onAdd} style={{ padding: '8px 16px' }}>
          추가
        </button>
      </div>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
};

export default Ex6;
