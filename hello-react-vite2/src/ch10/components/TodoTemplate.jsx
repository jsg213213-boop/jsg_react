import './TodoTemplate.scss';

const TodoTemplate = ({ children, stats }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="app-stats">
        완료 <b>{stats.completed}</b> / 전체 <b>{stats.total}</b>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;