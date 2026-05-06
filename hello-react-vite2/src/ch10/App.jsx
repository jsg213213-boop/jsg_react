// src/App.js
import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  // ── 상태 선언 ──────────────────────────────────────────
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: false },
  ]);

  // 다음 id 추적 (useState 아닌 useRef 사용 → 리렌더링 불필요)
  const nextId = useRef(4);

  // ── 할 일 추가 ─────────────────────────────────────────
  // concat: 기존 배열은 그대로 두고 새 배열을 반환 (불변성 유지)
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // 함수형 업데이트: 항상 최신 todos 기준으로 업데이트
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // 다음 id 증가
  }, []); // 의존성 없음 → 마운트 시 1회만 생성

  // ── 할 일 삭제 ─────────────────────────────────────────
  // filter: id가 다른 것만 남기면 해당 id 항목이 제거됨
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  // ── 완료 토글 ──────────────────────────────────────────
  // map: id가 같은 항목만 checked를 반전, 나머지는 그대로
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, checked: !todo.checked } // 스프레드로 복사 후 checked만 변경
          : todo,
      ),
    );
  }, []);

  // ── 렌더링 ────────────────────────────────────────────
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
