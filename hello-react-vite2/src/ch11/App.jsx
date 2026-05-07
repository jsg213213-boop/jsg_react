import { useState, useCallback, memo, useReducer } from 'react';
import { List } from 'react-virtualized';
import 'react-virtualized/styles.css';

// ── 기존 프로젝트 컴포넌트 (중복 방지용 임포트 생략 및 목업 처리) ────────────────
const TodoTemplate = ({ children, total, checked }) => (
  <div style={{ width: 512, margin: '0 auto', background: 'white', borderRadius: 4, overflow: 'hidden' }}>
    <div style={{ background: '#22b8cf', color: 'white', height: '4rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      일정 관리 ({checked} / {total})
    </div>
    <div style={{ background: 'white' }}>{children}</div>
  </div>
);

// ── [Q7] react-virtualized 완성형 컴포넌트 ─────────────────────

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i += 1) {
    array.push({ id: i, text: `할 일 ${i}`, checked: false });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

const TodoItemQ7 = memo(function TodoItem({ todo, onToggle, onRemove, style }) {
  return (
    // TODO 1: 전달받은 style을 반드시 적용 (위치 계산용)
    <div style={style}> 
      <div style={{ 
        display: "flex", gap: 8, alignItems: "center", 
        padding: "0 12px", height: 56, // rowHeight보다 살짝 작거나 같게
        borderBottom: "1px solid #eee", boxSizing: 'border-box'
      }}>
        <button type="button" onClick={() => onToggle(todo.id)}>
          {todo.checked ? "✅" : "⬜"}
        </button>
        <span style={{ flex: 1 }}>{todo.text}</span>
        <button type="button" onClick={() => onRemove(todo.id)}>🗑</button>
      </div>
    </div>
  );
});

const TodoListQ7 = memo(function TodoList({ todos, onToggle, onRemove }) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoItemQ7
          key={key}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          style={style}
        />
      );
    },
    // TODO 2: todos와 핸들러들이 바뀔 때 renderer도 갱신
    [todos, onToggle, onRemove] 
  );

  return (
    <List
      width={512}        // TODO 3: 리스트 너비
      height={513}       // TODO 4: 스크롤 영역 높이
      rowCount={todos.length} // TODO 5: 전체 데이터 개수
      rowHeight={57}     // TODO 6: 각 행의 높이 (Item의 높이와 일치)
      rowRenderer={rowRenderer}
      style={{ outline: "none", border: "1px solid #dee2e6", borderRadius: 8 }}
    />
  );
});

// ── 메인 App 컴포넌트 ──────────────────────────────────────────

export default function App() {
  // ── [Q7 상태 관리] ──
  const [todosQ7, dispatchQ7] = useReducer(
    todoReducer,
    undefined,
    createBulkTodos // TODO 7: 지연 초기화 함수
  );

  // TODO 8: useCallback으로 함수 참조 유지
  const onToggleQ7 = useCallback((id) => dispatchQ7({ type: "TOGGLE", id }), []);
  const onRemoveQ7 = useCallback((id) => dispatchQ7({ type: "REMOVE", id }), []);

  // ── 기존 실습용 임시 상태 (Q2~Q6) ──
  const [parentCount, setParentCount] = useState(0);

  return (
    <div style={{ padding: 24, background: '#f0f2f5', minHeight: '100vh', fontFamily: "system-ui" }}>
      
      {/* ── Q7 실습 영역 ────────────────────────────────────────── */}
      <section style={{ marginBottom: 30, padding: 20, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: 600 }}>
        <h2>Q7 — react-virtualized 완성형</h2>
        <p style={{ color: "#868e96", marginBottom: 16 }}>
          가상 스크롤 테스트: 전체 {todosQ7.length}개 항목 중 보이는 부분만 DOM에 존재합니다.
        </p>
        <TodoListQ7 todos={todosQ7} onToggle={onToggleQ7} onRemove={onRemoveQ7} />
      </section>

      {/* ── 이전 실습 요약 (복습용) ────────────────────────────────── */}
      <section style={{ marginBottom: 30, padding: 20, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: 600 }}>
        <h2>기존 실습 복습</h2>
        <button onClick={() => setParentCount(c => c + 1)}>부모 리렌더 테스트 ({parentCount})</button>
        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          * 이전의 Q2~Q6 로직이 위 Q7 컴포넌트의 성능 최적화(memo, useCallback)의 밑바탕이 되었습니다.
        </p>
      </section>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '2px dashed #ccc' }} />

      {/* ── 메인 일정 관리 앱 레이아웃 ── */}
      <TodoTemplate total={todosQ7.length} checked={todosQ7.filter(t=>t.checked).length}>
         <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
           이 영역은 기존 App.js의 TodoInsert 등이 들어가는 자리입니다.
         </div>
      </TodoTemplate>
    </div>
  );
}