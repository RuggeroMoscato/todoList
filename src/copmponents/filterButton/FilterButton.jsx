import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markAllCompleted, filterTodos } from "../../redux/reducers";
import './filterButton.css'

const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos({ filter }));
  };
  return (
    <div className="todo__filterButton">
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Tutti</option>
        <option value="COMPLETED">Completati</option>
        <option value="INCOMPLETE">Non completati</option>
      </select>
      <button onClick={() => dispatch(markAllCompleted())}>Segna tutti</button>
    </div>
  );
};

export default FilterButton;
