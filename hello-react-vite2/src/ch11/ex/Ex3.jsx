import { useState, useRef, useCallback } from 'react';

const Ex3 = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: false },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    if (!text || !text.trim()) {
      return;
    }

    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  return (
    <div>
      {/* 1. onInsert를 사용하는 예시 (버튼 클릭 시 테스트용) */}
      <button onClick={() => onInsert('새로운 할 일')}>추가 테스트</button>

      {/* 2. todos를 사용하는 예시 (화면 렌더링) */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ex3;