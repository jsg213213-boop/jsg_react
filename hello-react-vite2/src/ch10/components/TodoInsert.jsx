// src/components/TodoInsert.js
import { useState, useCallback } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  // 입력창의 현재 값을 로컬 state로 관리
  const [value, setValue] = useState('');

  // 순서3, priority 부분 , useState 로 관리하기.
  const [priority, setPriority] = useState('medium');

  // onChange: input이 바뀔 때마다 value 업데이트
  // 빈 배열 [] → 컴포넌트 마운트 시 1번만 함수 생성
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onSubmit: 폼 제출 시 실행
  // onInsert와 value가 바뀔 때만 새 함수 생성
  const onSubmit = useCallback(
    (e) => {
      // 순서4, priority 같이 추가.
      onInsert(value, priority); // 부모에게 새 할 일 전달
      setValue(''); // 입력창 초기화
      e.preventDefault(); // 페이지 새로고침 방지
    },
    // 순서5, 의존성 배열에 , priority 추가
    [onInsert, value, priority],
  );

  // 순서7, priority가 변경될 때 마다, 값을 변경해주는 함수(이벤트처리)
  const onPriorityChange = useCallback((e) => setPriority(e.target.value), []);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      {/* 순서6, select 태그를 이용해서, 선택하는 옵션 및 로직 연결 */}
      <select
        value={priority}
        onChange={onPriorityChange}
        // 순서7, 스타일 추가
        style={{
          padding: '0 0.5rem',
          background: '#495057',
          color: 'white',
          border: 'none',
        }}
      >
        <option value="high">높음</option>
        <option value="medium">중간</option>
        <option value="low">낮음</option>
      </select>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        {/* <MdAdd /> */}
        <AiFillEdit />
      </button>
    </form>
  );
};

export default TodoInsert;
