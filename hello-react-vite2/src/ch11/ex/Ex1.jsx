// src/components/TodoListItem.js
import {
  MdCheckBoxOutlineBlank, // 미체크 아이콘 □
  MdCheckBox, // 체크 아이콘 ☑
  MdRemoveCircleOutline, // 삭제 아이콘 ⊖
} from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import cn from 'classnames';
import '../components/TodoListItem.scss';

// ### 📝 실습 문제

// **문제 2-1** : `TodoListItem`에서 `todo`
// 객체를 구조 분해 할당 없이 사용하도록 코드를 수정해 보세요.
// (`todo.id`, `todo.text`, `todo.checked` 형태로)

const Ex1 = ({ todo, onRemove, onToggle }) => {
  //   const { id, text, checked } = todo; // 구조 분해 할당

  return (
    <div className="TodoListItem">
      {/* 체크박스 영역: 클릭 시 토글 */}
      <div
        className={cn('checkbox', { checked: todo.checked })} // checked=true면 'checkbox checked'
        onClick={() => onToggle(todo.id)}
      >
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>

      {/* 삭제 버튼: 클릭 시 삭제 */}
      <div className="remove" onClick={() => onRemove(todo.id)}>
        {/* <MdRemoveCircleOutline /> */}
        <AiFillDelete />
      </div>
    </div>
  );
};

export default Ex1;
