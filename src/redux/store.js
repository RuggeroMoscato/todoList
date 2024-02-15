import { configureStore } from "@reduxjs/toolkit";

import TodosReducer from "./reducers";

const store = configureStore({
  reducer: {
    tasks: TodosReducer,
  },
});

export default store;
//cosa significa deprecato? sono le funzioni che venivano usate prima ma che sono diventate obsolete.
//come usare lo store? Per prima cosa bisogna andare in index.js e mettere tutta l'app dentro un <Provider>.
//per chiudere il terminale più velocemente premere control c.
