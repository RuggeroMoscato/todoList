import { createSlice, nanoid } from "@reduxjs/toolkit";

export const TodosReducer = createSlice({
  name: "Todos",
  initialState: {
    todos: [],
    filter: "ALL",
    searchTerm: "",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
        id: nanoid(),
      });
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    markCompleted: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: true } : todo
      );
    },
    markIncomplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: false } : todo
      );
    },
    markAllCompleted: (state) => {
      state.todos = state.todos.map((todo) => ({ ...todo, completed: true }));
    },
    filterTodos: (state, action) => {
      state.filter = action.payload.filter;
    },

    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      console.log(action.payload);
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  filterTodos,
  updateSearchTerm,
  markAllCompleted,
  markCompleted,
  markIncomplete,
} = TodosReducer.actions;
export default TodosReducer.reducer;
