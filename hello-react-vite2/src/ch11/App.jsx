import  { useState, useCallback, memo, useReducer } from 'react';
import { List } from 'react-virtualized';
import 'react-virtualized/styles.css';

/* ============================================================
   1. 데이터 생성 및 리듀서 (Q1, Q7 공용)
   ============================================================ */

// [Q1] 지연 초기화 테스트용 함수
function createBulkTodos() {
  console.log("createBulkTodos 실행 (이 로그는 처음 1번만 찍혀야 성공)");
  const array = [];
  for (let i = 1; i <= 2500; i += 1) {
    array.push({ id: i, text: `할 일 ${i}`, checked: false });
  }
  return array;
}

// [Q7] useReducer용 리듀서 함수
function todoReducer(todos, action) {
  switch (action.type) {
    case "TOGGLE":
      return todos.map((t) => (t.id === action.id ? { ...t, checked: !t.checked } : t));
    case "REMOVE":
      return todos.filter((t) => t.id !== action.id);
    default:
      return todos;
  }
}

/* ============================================================
   2. 최적화 컴포넌트들 (Q2~Q6)
   ============================================================ */

// [Q2] 일반 컴포넌트 (최적화 안됨)
const PlainChild = ({ name }) => {
  console.log("[Q2] 일반 자식 렌더됨:", name);
  return <div style={{ padding: 8, border: "1px solid #ccc", marginTop: 5 }}>{name}</div>;
};

// [Q3, Q6] memo가 적용된 컴포넌트
const MemoChild = memo(function MemoChild({ name, score, onToggle }) {
  console.log("[Q3/Q6] 최적화 자식 렌더됨:", name);
  return (
    <div style={{ padding: 10, border: "1px solid #22b8cf", marginTop: 5, borderRadius: 8 }}>
      {name} | {score} {onToggle && <button onClick={onToggle}>토글</button>}
    </div>
  );
});

// [Q4] useCallback 테스트용 Row
const Row = memo(function Row({ label, onPing }) {
  console.log("[Q4] Row 렌더:", label);
  return (
    <div style={{ display: "flex", gap: 8, padding: 8, borderBottom: "1px solid #eee" }}>
      <span>{label}</span>
      <button onClick={onPing}>ping</button>
    </div>
  );
});

// [Q7] 가상 스크롤용 TodoItem
const TodoItemVirtual = memo(function TodoItem({ todo, onToggle, onRemove, style }) {
  return (
    <div style={style}> {/* Q7-TODO 1: 위치 계산용 style 필수 적용 */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", padding: "0 12px", height: 56, borderBottom: "1px solid #eee", boxSizing: 'border-box' }}>
        <button onClick={() => onToggle(todo.id)}>{todo.checked ? "✅" : "⬜"}</button>
        <span style={{ flex: 1 }}>{todo.text}</span>
        <button onClick={() => onRemove(todo.id)}>🗑</button>
      </div>
    </div>
  );
});

/* ============================================================
   3. 메인 App 컴포넌트
   ============================================================ */
export default function App() {
  // --- [Q1] useState 지연 초기화 ---
  const [renderTick, setRenderTick] = useState(0);
  // eslint-disable-next-line no-unused-vars
const [q1Todos] = useState(createBulkTodos);

  // --- [Q7] useReducer & 가상 스크롤 상태 ---
  const [todosQ7, dispatchQ7] = useReducer(todoReducer, undefined, createBulkTodos);
  const onToggleQ7 = useCallback((id) => dispatchQ7({ type: "TOGGLE", id }), []);
  const onRemoveQ7 = useCallback((id) => dispatchQ7({ type: "REMOVE", id }), []);

  // --- [Q2, Q3, Q4] 기타 실습용 상태 ---
  const [q2Count, setQ2Count] = useState(0);
  const [q3Parent, setQ3Parent] = useState(0);
  // eslint-disable-next-line no-unused-vars
const [q3Score, setQ3Score] = useState(100);
  const [q4Count, setQ4Count] = useState(0);

  // --- [Q4] useCallback 함수 ---
  const handlePing = useCallback(() => console.log("Ping!"), []);

  // --- [Q7] Virtualized rowRenderer ---
  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todosQ7[index];
    return <TodoItemVirtual key={key} todo={todo} onToggle={onToggleQ7} onRemove={onRemoveQ7} style={style} />;
  }, [todosQ7, onToggleQ7, onRemoveQ7]);

  return (
    <div style={{ padding: 24, background: '#f8f9fa', minHeight: '100vh', fontFamily: "system-ui" }}>
      <h1 style={{ color: '#22b8cf' }}>성능 최적화 종합 실습 (Q1-Q7)</h1>

      {/* Q1 섹션 */}
      <section style={sectionStyle}>
        <h3>Q1. 지연 초기화 (Lazy Init)</h3>
        <button onClick={() => setRenderTick(t => t + 1)}>App 리렌더 ({renderTick})</button>
        <p>버튼을 눌러도 콘솔에 "createBulkTodos" 로그가 안 생기면 성공!</p>
      </section>

      {/* Q2 & Q3 섹션 */}
      <section style={sectionStyle}>
        <h3>Q2 & Q3. 리렌더 조건과 React.memo</h3>
        <button onClick={() => setQ2Count(c => c + 1)}>Q2 무조건 렌더 버튼 ({q2Count})</button>
        <button onClick={() => setQ3Parent(c => c + 1)} style={{ marginLeft: 8 }}>Q3 메모 유지 버튼 ({q3Parent})</button>
        <PlainChild name="Q2: 저는 계속 렌더링돼요" />
        <MemoChild name="Q3: 저는 props가 안 바뀌면 쉼표예요" score={q3Score} />
      </section>

      {/* Q4 섹션 */}
      <section style={sectionStyle}>
        <h3>Q4. useCallback으로 메모 깨짐 방지</h3>
        <button onClick={() => setQ4Count(c => c + 1)}>부모 리렌더 ({q4Count})</button>
        <Row label="useCallback 적용됨" onPing={handlePing} />
      </section>

      {/* Q5 & Q6 섹션 */}
      <section style={sectionStyle}>
        <h3>Q5 & Q6. 불변성 유지와 복합 최적화</h3>
        <p>아래 가상 스크롤의 체크 표시(✅)는 불변성을 지킨 spread 연산자로 업데이트됩니다.</p>
      </section>

      {/* Q7 섹션 */}
      <section style={sectionStyle}>
        <h3>Q7. react-virtualized 가상 스크롤</h3>
        <List
          width={512}
          height={400}
          rowCount={todosQ7.length}
          rowHeight={57}
          rowRenderer={rowRenderer}
          style={{ outline: "none", border: "1px solid #dee2e6", borderRadius: 8, background: '#fff' }}
        />
        <p><small>* 2500개의 아이템 중 보이는 7개 정도만 DOM에 생성됩니다.</small></p>
      </section>
    </div>
  );
}

// 간단한 스타일 객체
const sectionStyle = {
  marginBottom: 24,
  padding: 16,
  background: '#fff',
  borderRadius: 12,
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
};