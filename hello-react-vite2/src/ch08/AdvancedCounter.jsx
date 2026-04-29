import { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'RESET':
      return { value: 0 }; // 값을 0으로 초기화
    default:
      return state;
  }
}

const AdvancedCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, { value: 0 });

  return (
    <div>
      <p>현재 값: <b>{state.value}</b></p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>초기화</button>
    </div>
  );
};

export default AdvancedCounter;