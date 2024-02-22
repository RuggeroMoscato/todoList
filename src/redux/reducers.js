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
      (state.filter = action.payload.filter)
        (state.searchTerm = action.payload.searchTerm)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
      (state.filter = action.payload.filter)
        (state.searchTerm = action.payload.searchTerm)
    },
    markCompleted: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: true } : todo
      );
      (state.filter = action.payload.filter)
        (state.searchTerm = action.payload.searchTerm)
    },
    markIncomplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: false } : todo
      );
      (state.filter = action.payload.filter)
      (state.searchTerm = action.payload.searchTerm)
    },
    markAllCompleted: (state, action) => {
      state.todos = state.todos.map((todo) => ({ ...todo, completed: true }));
      (state.filter = action.payload.filter)
      (state.searchTerm = action.payload.searchTerm)
    },
    filterTodos: (state, action) => {
       (state.todos = state.todos)
      state.filter = action.payload.filter;
      (state.searchTerm = action.payload.searchTerm)
    },
    updateSearchTerm: (state, action) => {
       (state.todos = state.todos)
         (state.filter = action.payload.filter)
      state.searchTerm = action.payload.searchTerm;
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
