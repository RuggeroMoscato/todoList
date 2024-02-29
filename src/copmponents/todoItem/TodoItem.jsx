import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../../redux/reducers";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import "./todoItem.css";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="todoItem">
      <div className="todo_item-text">
        <span>{index + 1}.</span>
        <span>{todo.text}</span>
      </div>
      <div className="todo_item-buttons">
        <button
          className="blue__button"
          onClick={() => dispatch(toggleTodo({ id: todo.id }))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="red__button"
          onClick={() => dispatch(removeTodo({ id: todo.id }))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="green__button"
            onClick={() => dispatch(markCompleted({ id: todo.id }))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="yellow__button"
            onClick={() => dispatch(markIncomplete({ id: todo.id }))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
