import { useSelector } from "react-redux";
import TodoItem from "../todoItem/TodoItem";
import './todoList.css';
const TodoList = () => {
  // const filteredTodos = useSelector((state) => {
  //   const todos = state.tasks.todos;
  //   const filter = state.filter;
  //   const searchTerm = state.searchTerm.toLowerCase();

  //   return todos.filter((todo) => {
  //     const matchesFilter =
  //       (filter === "COMPLETED" && todo.completed) ||
  //       (filter === "INCOMPLETE" && !todo.completed) ||
  //       filter === "ALL";

  //     const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

  //     return matchesFilter && matchesSearch;
  //   });
  // });

  // console.log("Filtered Todos:", filteredTodos);
  
 const filteredTodos=useSelector((state)=>state.tasks.todos)
console.log(filteredTodos)
  return (
    <ul>
      <li className="todoItem">Tutte le tue note qui:</li>
      {filteredTodos?.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
