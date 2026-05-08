// src/App.js
import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import Ex1 from './ex/Ex1';
import Ex2 from './ex/Ex2';
import Ex3 from './ex/Ex3';
import Ex4 from './ex/Ex4';
import Ex5 from './ex/Ex5';
import Ex6 from './ex/Ex6';
import Ex7 from './ex/Ex7';

const App = () => {
  // ── 상태 선언 ──────────────────────────────────────────
  // const [todos, setTodos] = useState([
  //   { id: 1, text: '리액트의 기초 알아보기', checked: true },
  //   { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
  //   { id: 3, text: '일정 관리 앱 만들어 보기', checked: false },
  // ]);
  function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 50000; i++) {
      array.push({ id: i, text: `할 일${i}`, checked: false });
    }
    return array;
  }

  // ✅ 함수 자체를 넘기면 첫 렌더에서만 호출됨
  const [todos, setTodos] = useState(createBulkTodos);

  // 다음 id 추적 (useState 아닌 useRef 사용 → 리렌더링 불필요)
  const nextId = useRef(4);

  // ── 할 일 추가 ─────────────────────────────────────────
  // concat: 기존 배열은 그대로 두고 새 배열을 반환 (불변성 유지)
  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // 함수형 업데이트: 항상 최신 todos 기준으로 업데이트
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // 다음 id 증가
  }; // 의존성 없음 → 마운트 시 1회만 생성

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
    <div>
      <h2>실습1 풀이</h2>
      <Ex1></Ex1>
      <h2>실습2 풀이</h2>
      <Ex2></Ex2>
      <h2>실습3 풀이</h2>
      <Ex3></Ex3>
      <h2>실습4 풀이</h2>
      <Ex4></Ex4>
      <h2>실습5 풀이</h2>
      <Ex5></Ex5>
      <h2>실습6 풀이</h2>
      <Ex6></Ex6>
      <h2>실습7 풀이</h2>
      <Ex7></Ex7>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
};

export default App;
