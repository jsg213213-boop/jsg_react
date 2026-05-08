import { produce } from 'immer';

const Ex2 = () => {
  const todoList = [
    { id: 1, todo: '운동하기', checked: false },
    { id: 2, todo: '공부하기', checked: false },
    { id: 3, todo: '책 읽기', checked: false },
  ];

  // Immer를 사용하여 상태 변경
  const nextTodoList = produce(todoList, (draft) => {
    // 1. id가 3인 항목 수정
    const todo = draft.find((item) => item.id === 3);
    if (todo) todo.todo = '독서하기';

    // 2. id가 1인 항목 삭제
    const index = draft.findIndex((item) => item.id === 1);
    if (index !== -1) draft.splice(index, 1);
  });

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>실습 2: 할 일 목록 수정/삭제</h3>
      <ul>
        {nextTodoList.map((item) => (
          <li key={item.id}>
            {item.id}: {item.todo} {item.checked ? '(완료)' : '(미완료)'}
          </li>
        ))}
      </ul>
      <p style={{ color: 'blue', fontSize: '0.9rem' }}>
        * id 1번 삭제됨, id 3번 '독서하기'로 변경됨
      </p>
    </div>
  );
};

export default Ex2;