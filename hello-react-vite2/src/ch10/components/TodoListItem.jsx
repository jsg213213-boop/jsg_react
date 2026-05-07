// src/components/TodoListItem.js
import {
  MdCheckBoxOutlineBlank, // 미체크 아이콘 □
  MdCheckBox, // 체크 아이콘 ☑
} from 'react-icons/md';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';

import cn from 'classnames';
import './TodoListItem.scss';
import { useState } from 'react';

// 순서8, priority 색상 바 추가.
// - `TodoListItem`에서 우선순위에 따라 왼쪽에 색상 바(border-left) 표시
//     - high: 빨간색 `#ff6b6b`
//     - medium: 노란색 `#fcc419`
//     - low: 초록색 `#51cf66`
const priorityColor = {
  high: `#ff6b6b`,
  medium: `#fcc419`,
  low: `#51cf66`,
};

// ── 실습7, ────────────────────────────────────────────
// 순서5
const TodoListItem = ({ todo, onRemove, onToggle, onUpdate }) => {
  // 순서9, todo에서, priority 값을 사용하기 쉽게 꺼내 놓고
  const { id, text, checked, priority } = todo; // 구조 분해 할당

  // ── 실습7, ────────────────────────────────────────────
  // 순서6
  // 1) 수정 중인지 여부 나타내는 상태변수 2) 수정된 값
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  // ── 실습7, ────────────────────────────────────────────
  // 순서7
  // 실제 수정 기능 동작 함수,
  const handleUpdate = () => {
    onUpdate(id, editText);
    setIsEditing(false);
  };

  // 삭제 전 confirm 다이얼로그 표시,
  const handleRemove = () => {
    if (window.confirm(`"${text}" 정말 삭제할까요?`)) {
      onRemove(id);
    }
  };

  return (
    <div>
      {/* // ── 실습7, ────────────────────────────────────────────
  // 순서8
  // 조건부 렌더링 */}
      {isEditing ? (
        // 수정 입력창
        <div
          className="TodoListItem"
          // 순서10, 실제 아이템의 왼쪽 사이드 바에 색상으로 표기하기.
          style={{ borderLeft: `4px solid ${priorityColor[priority]}` }}
        >
          {/* 수정 입력 영역 변경 */}
          <div className="checkbox editing">
            <input
              className="edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />

            <div className="update save" onClick={handleUpdate}>
              <AiFillEdit />
            </div>

            <div className="remove cancel" onClick={() => setIsEditing(false)}>
              <MdOutlineCancel />
            </div>
          </div>
        </div>
      ) : (
        // 수정 중이 아닐 때
        <div
          className="TodoListItem"
          // 순서10, 실제 아이템의 왼쪽 사이드 바에 색상으로 표기하기.
          style={{ borderLeft: `4px solid ${priorityColor[priority]}` }}
        >
          {/* 체크박스 영역: 클릭 시 토글 */}
          <div
            className={cn('checkbox', { checked })} // checked=true면 'checkbox checked'
            onClick={() => onToggle(id)}
          >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
          </div>

          {/* 수정 버튼: 클릭 시 수정 */}
          {/* // ── 실습7, ────────────────────────────────────────────
  // 순서9
  // 조건부 렌더링 */}
          <div className="update" onClick={() => setIsEditing(true)}>
            <AiFillEdit />
          </div>

          {/* 삭제 버튼: 클릭 시 삭제 */}
          <div className="remove" onClick={handleRemove}>
            {/* <MdRemoveCircleOutline /> */}
            <AiFillDelete />
          </div>
        </div>
      )}
    </div>
  ); // return
}; //TodoListItem

export default TodoListItem;
