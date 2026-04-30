// useInputs.js - 여러 input을 한번에 관리하는 커스텀 Hook
import { useReducer } from 'react';

function reducer(state, action) {
  // action.name: input의 name 속성, action.value: 입력값
  return { ...state, [action.name]: action.value };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target); // { name, value }를 action으로 전달
  };
  return [state, onChange];
}