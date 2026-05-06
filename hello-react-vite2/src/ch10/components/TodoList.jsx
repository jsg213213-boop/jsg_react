import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => (
  <div className="TodoList">
    {todos.length === 0 ? (
      <div className="empty-message">할 일이 없습니다! 🎉</div>
    ) : (
      todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))
    )}
  </div>
);

export default TodoList;
