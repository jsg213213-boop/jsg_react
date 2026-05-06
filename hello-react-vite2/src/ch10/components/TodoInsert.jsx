import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const [priority, setPriority] = useState('medium'); // 기본값 보통

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onPriorityChange = useCallback((e) => {
    setPriority(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value, priority);
      setValue(''); // 값 초기화
      setPriority('medium'); // 우선순위 초기화
      e.preventDefault();
    },
    [onInsert, value, priority],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <select value={priority} onChange={onPriorityChange} className="PrioritySelect">
        <option value="high">높음</option>
        <option value="medium">보통</option>
        <option value="low">낮음</option>
      </select>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;