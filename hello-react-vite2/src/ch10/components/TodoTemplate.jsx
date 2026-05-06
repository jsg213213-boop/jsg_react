// src/components/TodoTemplate.js
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => (
  <div className="TodoTemplate">
    <div className="app-title">ch10 일정 관리</div>
    <div className="content">{children}</div>
  </div>
);

export default TodoTemplate;
