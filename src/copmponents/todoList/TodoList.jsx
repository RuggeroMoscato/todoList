import { useSelector } from "react-redux";
import TodoItem from "../todoItem/TodoItem";
import "./todoList.css";
const TodoList = ({ filter, searchTerm }) => {
  const filteredTodos = useSelector((state) => {
    const todos = state.tasks.todos;
    const filter = state.tasks.filter;
    const searchTerm = state.tasks.searchTerm;

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  return (
    <ul className="unordered-todos">
      
      {filteredTodos?.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
