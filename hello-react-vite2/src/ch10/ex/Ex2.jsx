// src/components/TodoList.js
import TodoListItem from './TodoListItem';
import '../components/TodoList.scss';

// 문제 2-2 : TodoList에서 todos가 비어 있을 때
// "할 일이 없습니다! 🎉" 메시지를 표시하도록 수정해 보세요.

const Ex2 = ({ todos, onRemove, onToggle }) => (
  <div className="TodoList">
    {todos.length === 0 ? (
      <p style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
        할 일이 없습니다! 🎉
      </p>
    ) : (
      todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id} // 리스트 렌더링 시 반드시 고유한 key 필요
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))
    )}
  </div>
);

export default Ex2;
