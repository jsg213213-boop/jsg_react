import { produce } from 'immer';
import React from 'react';

const ImmerTest = () => {
  const originalState = [
    { id: 1, todo: '운동하기', checked: false },
    { id: 2, todo: '공부하기', checked: true },
  ];

  // ✅ 항목 추가
  const addedState = produce(originalState, (draft) => {
    draft.push({ id: 3, todo: '책 읽기', checked: false });
  });

  console.log('✅ 항목 추가된 새로운 배열 addedState  : ', addedState);
  console.log('✅ 원본 배열은 그대로 유지  : ', originalState);

  // ✅ id가 2인 항목 checked → false
  const checkedState = produce(originalState, (draft) => {
    const todo = draft.find((t) => t.id === 2);
    if (todo) todo.checked = false;
  });

  console.log(
    '✅ id가 2인 항목 checked → false 새로운 배열 checkedState  : ',
    checkedState,
  );
  console.log('✅ 원본 배열은 그대로 유지  : ', originalState);

  // ✅ id가 1인 항목 삭제
  const deletedState = produce(originalState, (draft) => {
    const index = draft.findIndex((t) => t.id === 1);
    if (index !== -1) draft.splice(index, 1);
  });

  console.log(
    '✅ id가 1인 항목 삭제 새로운 배열 deletedState  : ',
    deletedState,
  );
  console.log('✅ 원본 배열은 그대로 유지  : ', originalState);

  return (
    <div>
      <h2>immer 를 이용한 crud 간단 확인. 콘솔 확인해주세요. </h2>
    </div>
  );
};

export default ImmerTest;
