import React, { useState } from 'react';

const Ex5 = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', checked: false }, // 첫 요소의 객체가 저장된 기존 메모리 주소 : 0x100
    { id: 2, text: '운동하기', checked: false }, // 두번째 요소의 객체가 저장된 기존 메모리 주소 : 0x200
    { id: 3, text: '독서하기', checked: false }, // 세번째 요소의 객체가 저장된 기존 메모리 주소 : 0x300
  ]);

  // 문제점.
  // 기존 배열과 객체를 직접 수정하고 같은 배열 참조를 다시 전달했기 때문에
  // React가 변경을 제대로 감지하지 못합니다.

  // 해결책 및 방법
  // 배열은 새로 만들었지만 내부 객체는
  // 같은 참조를 공유하기 때문에 객체 직접 수정 문제 해결이 필요함.

  // ? 답) map 방식을 이용한다. 새로운 배열을 생성.
  // 기존 배열과 객체를 직접 수정하지 않고, 변경할 항목만 새 객체로 교체 가능함.
  const toggleFirst = () => {
    // 🐛 버그: 직접 변이(mutate)하고 같은 배열 참조를 넘김
    // todos[0].checked = !todos[0].checked;
    // setTodos(todos);
    // 해결책, 답
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        //  prevTodos.map
        // =>
        // [ 배열도 (새배열, 새참조)
        //     { id: 1, text: '리액트 공부하기', checked: false }, // 첫 요소의 객체가 저장된 기존 메모리 주소 변경됨 : 0x500 (새참조)
        //     { id: 2, text: '운동하기', checked: false }, // 두번째 요소의 객체가 저장된 기존 메모리 주소 : 0x200 (그대로)
        //     { id: 3, text: '독서하기', checked: false }, // 세번째 요소의 객체가 저장된 기존 메모리 주소 : 0x300 (그대로)
        //   ])
        todo.id === 1 ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Q5 — 불변성 버그</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((t) => (
          <li
            key={t.id}
            style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}
          >
            <span style={{ marginRight: 8 }}>{t.checked ? '✅' : '⬜'}</span>
            {t.text}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={toggleFirst}
        style={{ marginTop: 12, padding: '8px 16px' }}
      >
        첫 할 일 토글
      </button>
    </div>
  );
};

export default Ex5;
