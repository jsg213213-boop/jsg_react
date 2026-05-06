// src/components/TodoList.js
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => (
  <div className="TodoList">
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        key={todo.id} // 리스트 렌더링 시 반드시 고유한 key 필요
        onRemove={onRemove}
        onToggle={onToggle}
      />
    ))}
  </div>
);

export default TodoList;
