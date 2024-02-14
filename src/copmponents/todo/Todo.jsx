import { useState } from "react";
import { addTodo, updateSearchTerm } from "../../redux/actions";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import TodoList from "../todoList/TodoList";
import FilterButton from "../filterButton/FilterButton";

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
          <button onClick={handleAddTodoClick}>
            {" "}
            <IoIosSearch />
          </button>
        </div>
      </div>
      <div className="todo__list">
        <TodoList />
      </div>
    </div>
  );
};
export default Todo;
// a cosa serve lo useSelector? serve a selezionare uno stato.
