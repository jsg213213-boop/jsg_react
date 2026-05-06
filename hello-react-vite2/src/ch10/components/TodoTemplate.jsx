import './TodoTemplate.scss';

const TodoTemplate = ({ children, stats }) => {
  const { total, completed } = stats;

  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      {/* 실습 3-3: 완료된 할 일 / 전체 할 일 표시 */}
      <div className="app-stats" style={{ textAlign: 'right', padding: '0.5rem 1rem', fontSize: '0.9rem', color: '#868e96' }}>
        완료 {completed} / 전체 {total}
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;