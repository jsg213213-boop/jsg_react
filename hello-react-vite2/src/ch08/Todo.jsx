import { useReducer, useState } from 'react';

// 상태 변화 로직을 관리하는 리듀서 함수
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      // 기존 배열에 새로운 항목 객체를 추가 (불변성 유지)
      return [...state, { id: Date.now(), text: action.text }];
    case 'REMOVE':
      // 해당 id를 제외한 나머지 항목들만 필터링하여 반환
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const Todo = () => {
  // useReducer(리듀서함수, 초기값)
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');

  // 항목 추가 핸들러
  const onAdd = () => {
    if (input.trim() === '') return; // 빈 입력 방지
    dispatch({ type: 'ADD', text: input });
    setInput(''); // 입력창 초기화
  };

  // 엔터 키 지원
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onAdd();
  };

  return (
    <div>
      <h3>Todo 리스트 항목 (useReducer)</h3>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyPress={onKeyPress}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={onAdd}>추가</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '5px' }}>
            {todo.text} 
            <button 
              onClick={() => dispatch({ type: 'REMOVE', id: todo.id })}
              style={{ marginLeft: '10px' }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>할 일이 없습니다. 추가해 보세요!</p>}
    </div>
  );
};

export default Todo;