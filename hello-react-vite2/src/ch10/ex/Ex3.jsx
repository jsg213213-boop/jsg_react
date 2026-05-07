import React from 'react';
import { useState, useRef, useCallback } from 'react';

// 문제 3-1 : onInsert 함수에서 빈 문자열('')을 입력하면
// 추가하지 않도록 유효성 검사를 추가해 보세요.

const Ex3 = () => {
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
    // 빈문자열이면, onInsert 함수 기능을 나간다.
    if (!text.trim()) return;

    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // 함수형 업데이트: 항상 최신 todos 기준으로 업데이트
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // 다음 id 증가
  }, []); // 의존성 없음 → 마운트 시 1회만 생성

  return <div></div>;
};

export default Ex3;
