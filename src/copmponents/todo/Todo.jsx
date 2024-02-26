import { useState } from "react";
import { updateSearchTerm } from "../../redux/reducers";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import TodoList from "../todoList/TodoList";
import FilterButton from "../filterButton/FilterButton";
import { addTodo } from "../../redux/reducers";

const Todo = () => {
  const todos = useSelector((state) => state.todo);
  const filter = useSelector((state) => state.filter);
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="Todo__container">
      <h1>To do list </h1>
      <div className="todo__add">
        <div className="todo__add-searchBar">
          <input
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            type="text"
            placeholder="Aggiungi cose da fare"
          />
          <button onClick={handleAddTodoClick}>
            {" "}
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="todo__filter">
        <div className="todo__filterButton">
          <FilterButton />
        </div>
        <div className="todo__filter-searchBar">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            type="text"
            placeholder="Cerca"
          />
          <button onClick={(e) => handleSearchChange(e.target.value)}>
            {""}
            <IoIosSearch />
          </button>
        </div>
      </div>
      <div className="todo__list">
        <TodoList filter={filter} searchTerm={searchTerm} />
      </div>
    </div>
  );
};
export default Todo;
