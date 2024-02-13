import { useState } from "react";
import { addTodo, updateSearchTerm } from "../../redux/actions";
import "./todo.css";
import { useDispatch } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import FilterButton from "../filterButton/FilterButton";
function Todo() {
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  const handleAddTodoClick = () => {
    if (newTodoText.trim !== "") handleAddTodo();
    setNewTodoText("");
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
            placeholder="Aggiungi cose da fare"
          />
          <button onClick={handleAddTodoClick}>
            {" "}
            <IoIosSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todo;
