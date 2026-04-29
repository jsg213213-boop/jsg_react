import { useReducer } from 'react';

// 1. 초기값 정의
const initialState = {
  names: [
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ],
  inputText: '',
  nextId: 5,
  deletedItems: [],
};

// 2. Reducer 함수 (정렬 및 복구 로직 추가)
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, inputText: action.payload };

    case 'ADD_ITEM':
      return {
        ...state,
        names: state.names.concat({ id: state.nextId, text: state.inputText }),
        nextId: state.nextId + 1,
        inputText: '',
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        names: state.names.filter((name) => name.id !== action.payload.id),
        deletedItems: [...state.deletedItems, action.payload],
      };

    case 'UPDATE_ITEM':
      return {
        ...state,
        names: state.names.map((name) =>
          name.id === action.payload.id ? { ...name, text: action.payload.newText } : name
        ),
      };

    // --- 추가 기능 ---
    case 'RESTORE_ITEM':
      return {
        ...state,
        // 삭제된 배열에서 해당 아이템 제거
        deletedItems: state.deletedItems.filter((item) => item.id !== action.payload.id),
        // 기존 리스트에 다시 추가
        names: [...state.names, action.payload],
      };

    case 'SORT_ASC':
      return {
        ...state,
        names: [...state.names].sort((a, b) => a.text.localeCompare(b.text)),
      };

    case 'SORT_DESC':
      return {
        ...state,
        names: [...state.names].sort((a, b) => b.text.localeCompare(a.text)),
      };

    default:
      return state;
  }
}

const Ex6 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { names, inputText, deletedItems } = state;

  const onChange = (e) => dispatch({ type: 'CHANGE_INPUT', payload: e.target.value });

  const onClick = () => {
    if (!inputText.trim()) {
      alert('공백은 입력할 수 없습니다.');
      return;
    }
    if (names.some((name) => name.text === inputText)) {
      alert('이미 존재하는 항목입니다.');
      dispatch({ type: 'CHANGE_INPUT', payload: '' });
      return;
    }
    dispatch({ type: 'ADD_ITEM' });
  };

  const onRemove = (id) => {
    const removedItem = names.find((name) => name.id === id);
    if (window.confirm(`${removedItem.text}를 삭제하시겠습니까?`)) {
      dispatch({ type: 'REMOVE_ITEM', payload: removedItem });
    }
  };

  const rightClick = (e, id, text) => {
    e.preventDefault();
    const newText = prompt('수정할 내용을 입력하세요.', text);
    if (newText && newText.trim()) {
      dispatch({ type: 'UPDATE_ITEM', payload: { id, newText } });
    }
  };

  // --- 핸들러 추가 ---
  const restoreItem = (item) => {
    dispatch({ type: 'RESTORE_ITEM', payload: item });
  };

  const sortAscending = () => dispatch({ type: 'SORT_ASC' });
  const sortDescending = () => dispatch({ type: 'SORT_DESC' });

  const namesList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => onRemove(name.id)}
      onContextMenu={(e) => rightClick(e, name.id, name.text)}
      style={{ cursor: 'pointer', userSelect: 'none' }}
      title="더블클릭 시 삭제 / 우클릭 시 수정"
    >
      {name.text}
    </li>
  ));

  return (
    <div style={{ padding: '20px' }}>
      <input value={inputText} onChange={onChange} placeholder="항목을 입력하세요" />
      <button onClick={onClick}>추가</button>
      <hr />
      
      <button onClick={sortAscending}>가나다순 정렬</button>
      <button onClick={sortDescending}>가나다 역순 정렬</button>

      <ul>{namesList}</ul>

      <hr />
      <h2>삭제한 요소 목록 (복구 가능)</h2>
      {deletedItems.length === 0 ? (
        <p>삭제된 항목이 없습니다.</p>
      ) : (
        <ul>
          {deletedItems.map((item) => (
            <li key={item.id}>
              {item.text}{' '}
              <button onClick={() => restoreItem(item)}>복구</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ex6;