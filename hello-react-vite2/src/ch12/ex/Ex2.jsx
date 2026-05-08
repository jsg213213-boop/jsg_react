import { produce } from 'immer';
import React from 'react';

// > 아래 배열에서 `id`가 3인 항목의 `todo` 값을 `'독서하기'`로 수정하고,
// `id`가 1인 항목을 삭제하는 코드를 immer로 작성하세요.
// >

// ```jsx
// const todoList = [
//   { id: 1, todo: '운동하기', checked: false },
//   { id: 2, todo: '공부하기', checked: false },
//   { id: 3, todo: '책 읽기', checked: false },
// ];
// ```

const Ex2 = () => {
  const todoList = [
    { id: 1, todo: '운동하기', checked: false },
    { id: 2, todo: '공부하기', checked: false },
    { id: 3, todo: '책 읽기', checked: false },
  ];

  // ✅ id가 2인 항목 checked → false
  const checkedState = produce(todoList, (draft) => {
    const todo = draft.find((t) => t.id === 3);
    if (todo) todo.todo = '독서하기';
  });

  console.log(
    '✅ id가 3인 항목의 todo 값을 독서하기로  새로운 배열 checkedState  : ',
    checkedState,
  );
  console.log('✅ 원본 배열은 그대로 유지  : ', todoList);

  // ✅ id가 1인 항목 삭제
  const deletedState = produce(todoList, (draft) => {
    const index = draft.findIndex((t) => t.id === 1);
    if (index !== -1) draft.splice(index, 1);
  });

  console.log(
    '✅ id가 1인 항목 삭제 새로운 배열 deletedState  : ',
    deletedState,
  );
  console.log('✅ 원본 배열은 그대로 유지  : ', todoList);

  return <div></div>;
};

export default Ex2;
