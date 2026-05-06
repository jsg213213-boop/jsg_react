import {
  MdCheckBoxOutlineBlank, // 미체크 아이콘 □
  MdCheckBox, // 체크 아이콘 ☑
  MdRemoveCircleOutline, // 삭제 아이콘 ⊖
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  // 기존의 구조 분해 할당 코드를 삭제함
  return (
    <div className="TodoListItem">
      {/* 체크박스 영역: 클릭 시 토글 */}
      <div
        className={cn('checkbox', { checked: todo.checked })} // todo.checked로 접근
        onClick={() => onToggle(todo.id)} // todo.id로 접근
      >
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div> {/* todo.text로 접근 */}
      </div>

      {/* 삭제 버튼: 클릭 시 삭제 */}
      <div className="remove" onClick={() => onRemove(todo.id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
