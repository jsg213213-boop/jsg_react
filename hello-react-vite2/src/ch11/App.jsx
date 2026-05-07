// src/App.js
import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// 더미데이터 임시 저장소 위치

//

const App = () => {
  // ── 상태 선언 ──────────────────────────────────────────
  // 순서 11, 기존의 배열 값에도, priority 필드 추가.
  // const [todos, setTodos] = useState(() => {
  //   // 실습9,  로컬 스토리지 저장 및 불러오기 작업
  //   // ── 실습9, ────────────────────────────────────────────
  //   // 순서1,

  //   // 로컬 스토리지에 값 가져오기
  //   const savedTodos = localStorage.getItem('todos');

  //   // 저장된 값이 있으면 JSON -> 객체 변환
  //   if (savedTodos) {
  //     return JSON.parse(savedTodos);
  //   }

  //   // 없으면, 기본값 사용,
  //   return [
  //     {
  //       id: 1,
  //       text: '리액트의 기초 알아보기',
  //       checked: true,
  //       priority: 'high',
  //     },
  //     {
  //       id: 2,
  //       text: '컴포넌트 스타일링해 보기',
  //       checked: true,
  //       priority: 'medium',
  //     },
  //     {
  //       id: 3,
  //       text: '일정 관리 앱 만들어 보기',
  //       checked: false,
  //       priority: 'low',
  //     },
  //   ];

  //   // ── 실습9,순서1, ────────────────────────────────────────────
  // });

  //────성능 최적화 테스트 ────────────────────────────────────────

  function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
      array.push({ id: i, text: `할 일${i}`, checked: false, priority: 'low' });
    }
    return array;
  }

  // ✅ 함수 자체를 넘기면 첫 렌더에서만 호출됨
  const [todos, setTodos] = useState(createBulkTodos);

  //────성능 최적화 테스트 ────────────────────────────────────────

  // 다음 id 추적 (useState 아닌 useRef 사용 → 리렌더링 불필요)
  // const nextId = useRef(4);

  // 실습9,  로컬 스토리지 저장 및 불러오기 작업
  // ── 실습9, ────────────────────────────────────────────
  // 순서3,
  // 오후에 이어서 진행하기.
  // 새로 고침 이후에도, id 중복 방지.
  const nextId = useRef(
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
  );
  // ── 실습9, 순서3,────────────────────────────────────────────

  // 실습5,  작업
  // const checkedCount = useMemo(콜백함수, [의존성배열])
  const checkedCount = useMemo(
    () => todos.filter((todo) => todo.checked).length,
    [todos],
  );

  // ── 할 일 추가 ─────────────────────────────────────────
  // concat: 기존 배열은 그대로 두고 새 배열을 반환 (불변성 유지)
  // const onInsert = useCallback((text) => {
  //   // 빈문자열이면, onInsert 함수 기능을 나간다.
  //   if (!text.trim()) {
  //     alert('빈 문자열은 입력 불가입니다.');
  //     return;
  //   }

  //   const todo = {
  //     id: nextId.current,
  //     text,
  //     checked: false,
  //   };
  //   // 함수형 업데이트: 항상 최신 todos 기준으로 업데이트
  //   setTodos((todos) => todos.concat(todo));
  //   nextId.current += 1; // 다음 id 증가
  // }, []); // 의존성 없음 → 마운트 시 1회만 생성

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

  // 실습6,  onInsert 기능에 priority 파라미터 추가
  // ── 실습6, ────────────────────────────────────────────
  // 순서1,
  const onInsert = useCallback((text, priority = 'medium') => {
    // 빈문자열이면, onInsert 함수 기능을 나간다.
    if (!text.trim()) {
      alert('빈 문자열은 입력 불가입니다.');
      return;
    }

    const todo = {
      id: nextId.current,
      text,
      checked: false,
      // 순서2, 추가
      priority,
    };
    // 함수형 업데이트: 항상 최신 todos 기준으로 업데이트
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // 다음 id 증가
  }, []); // 의존성 없음 → 마운트 시 1회만 생성

  // 실습7,  수정 기능 추가
  // ── 실습7, ────────────────────────────────────────────
  // 순서1
  const onUpdate = useCallback((id, newText) => {
    if (!newText.trim()) {
      alert('빈 문자열은 입력 불가입니다.');
      return;
    }

    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  }, []);

  // 실습8,  검색 및 페이지네이션(커서기반) 기능 추가
  // ── 실습8, ────────────────────────────────────────────
  // 순서1
  // 1) 검색어 상태 변수 2) 커서 상태 변수
  const [keyword, setKeyword] = useState('');
  const [cursor, setCursor] = useState(10);

  // 실습8,  검색 및 페이지네이션(커서기반) 기능 추가
  // ── 실습8, ─────
  // 순서2   ────────────────────────────────────────────
  // 검색이된 todos 필터 기능
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [todos, keyword]);

  // 페이지네이션 기능, 10개씩 자르는 기능.
  const visibleTodos = useMemo(() => {
    return filteredTodos.slice(0, cursor); // cursor(=10), 마지막 인덱스는 제외함.
  }, [filteredTodos, cursor]);

  // 상태 변수, todos가 , 10개보다 더 많이 있는 경우에는 더보기가 가능한 상태 변수.
  const hasMore = cursor < filteredTodos.length;
  // 순서2  ────────────────────────────────────────────

  // 실습8,  검색 및 페이지네이션(커서기반) 기능 추가
  // ── 실습8, ─────
  // 순서3   ────────────────────────────────────────────
  // 검색 함수 , 더보기 함수 추가

  const onChangeKeyword = useCallback((e) => {
    setKeyword(e.target.value);
    setCursor(10);
  }, []);

  const onLoadMore = useCallback(() => {
    setCursor((prevCursor) => prevCursor + 10);
  }, []);

  // 순서3   ────────────────────────────────────────────

  // 실습9,  로컬 스토리지 저장 및 불러오기 작업
  // ── 실습9, ────────────────────────────────────────────
  // 순서2,
  // todos 변경될 때마다, localStorage 저장.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // ── 실습9,순서2, ────────────────────────────────────────────

  // ── 렌더링 ────────────────────────────────────────────
  // 실습5,  작업2, props 로 전달. 전체갯수, 체크된 갯수
  // `TodoTemplate`에 prop으로 전달하세요.
  return (
    <div>
      {/* // 순서4 ──────────────────────────────────────────── */}
      <TodoTemplate total={todos.length} checked={checkedCount}>
        <TodoInsert onInsert={onInsert} />
        {/* // ── 실습7, ────────────────────────────────────────────
  // 순서2 */}
        {/* //화면 동기화 없이, 일단 단순 기능만 추가하기.
    // 실습8,  검색 및 페이지네이션(커서기반) 기능 추가
    // ── 실습8, ─────
    // 순서4   ────────────────────────────────────────────
    // 검색어 입력창 */}
        <input
          value={keyword}
          onChange={onChangeKeyword}
          placeholder="검색어를 입력하세요"
          style={{
            width: '100%',
            padding: '0.6rem',
            fontSize: '1rem',
            boxSizing: 'border-box',
          }}
        />

        <TodoList
          // 기존 todos 배열에서, 10개씩 페이지네이션이 된 todos 로 교체 작업
          todos={visibleTodos}
          // 순서4   ────────────────────────────────────────────
          onRemove={onRemove}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
        {/* // 실습8,  검색 및 페이지네이션(커서기반) 기능 추가
    // ── 실습8, ─────
    // 순서5   ────────────────────────────────────────────
    // 만약, 페이지네이션 결과가 더 있는 경우, 더보기 추가. */}
        {hasMore && (
          <button
            onClick={onLoadMore}
            style={{
              width: '100%',
              padding: '0.7rem',
              border: 'none',
              background: '#22b8cf',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            더보기
          </button>
        )}

        {/* // 순서5   ──────────────────────────────────────────── */}
      </TodoTemplate>
    </div>
  );
};

export default App;
