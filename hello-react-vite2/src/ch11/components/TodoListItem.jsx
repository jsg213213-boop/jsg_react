// src/components/TodoListItem.js
import {
  MdCheckBoxOutlineBlank, // 미체크 아이콘 □
  MdCheckBox, // 체크 아이콘 ☑
  MdRemoveCircleOutline, // 삭제 아이콘 ⊖
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
import React from 'react';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo; // 구조 분해 할당

  return (
    <div className="TodoListItem" style={style}>
      {/* 체크박스 영역: 클릭 시 토글 */}
      <div
        className={cn('checkbox', { checked })} // checked=true면 'checkbox checked'
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>

      {/* 삭제 버튼: 클릭 시 삭제 */}
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
// export default TodoListItem;
