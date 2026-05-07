// src/components/TodoTemplate.js
import './TodoTemplate.scss';

// 실습5,  작업3
const TodoTemplate = ({ children, total, checked }) => (
  <div className="TodoTemplate">
    <div className="app-title">ch10 일정 관리</div>
    <div className="stats">
      완료 : {checked}/ 전체 : {total}
    </div>
    <div className="content">{children}</div>
  </div>
);

export default TodoTemplate;
