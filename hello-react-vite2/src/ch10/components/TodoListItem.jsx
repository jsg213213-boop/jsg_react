import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  // 문제 3-2: 삭제 확인
  const onConfirmRemove = () => {
    if (window.confirm('정말 삭제할까요?')) {
      onRemove(todo.id);
    }
  };

  // 우선순위별 색상 매핑
  const priorityColors = {
    high: '#ff6b6b',
    medium: '#fcc419',
    low: '#51cf66',
  };

  return (
    <div 
      className="TodoListItem" 
      style={{ borderLeft: `5px solid ${priorityColors[todo.priority]}` }} // 우선순위 바 추가
    >
      {/* 문제 2-1: 구조 분해 할당 없이 직접 사용 */}
      <div
        className={cn('checkbox', { checked: todo.checked })}
        onClick={() => onToggle(todo.id)}
      >
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>

      <div className="remove" onClick={onConfirmRemove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);