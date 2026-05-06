import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  // 실습 3-2: 삭제 전 확인 메시지
  const handleRemove = () => {
    if (window.confirm('정말 삭제할까요?')) {
      onRemove(todo.id);
    }
  };

  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked: todo.checked })}
        onClick={() => onToggle(todo.id)}
      >
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>

      {/* onClick에서 handleRemove 호출 */}
      <div className="remove" onClick={handleRemove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);