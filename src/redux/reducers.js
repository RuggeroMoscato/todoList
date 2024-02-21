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
      // (filter = state.filter),
      // (searchTerm = state.searchTerm);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
      // filter= state.filter,
      //  searchTerm =state.searchTerm
    },
    markCompleted: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: true } : todo
      );
      //         filter= state.filter,
      //         searchTerm= state.searchTerm
    },
    markIncomplete: (state, action) => {
      state.todos= state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: false } : todo
      )
      // filter= state.filter,
      // searchTerm= state.searchTerm
    },
    markAllCompleted: (state, filter) => {
      // state.todos= state.todos.map((todo) => ({ ...todo, completed: true })),
      //   filter= state.filter,
      //   searchTerm= state.searchTerm
    },
    filterTodos: (state, action) => {
      // state.todos= state.todos,
      //         filter= action.payload.filter,
      //         searchTerm= state.searchTerm
    },
    updateSearchTerm: (state, action) => {
      // state.todos= state.todos,
      //         filter= state.filter,
      //         searchTerm= action.payload.searchTerm
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
  markIncomplete
} = TodosReducer.actions;
export default TodosReducer.reducer;

