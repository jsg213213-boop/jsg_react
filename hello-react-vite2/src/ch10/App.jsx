import { useState, useRef, useCallback, useMemo } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: false },
  ]);

  const nextId = useRef(4);

  // ── 문제 3-1: 빈 문자열 유효성 검사 ─────────────────────
  const onInsert = useCallback((text) => {
    if (text.trim() === '') {
      alert('할 일을 입력해주세요!');
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

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  // ── 실습 3-3: 완료 개수 계산 (useMemo 사용) ─────────────
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((t) => t.checked).length;
    return { total, completed };
  }, [todos]);

  return (
    // TodoTemplate에 통계 정보를 props로 전달
    <TodoTemplate stats={stats}>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;