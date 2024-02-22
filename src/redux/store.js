import { configureStore } from "@reduxjs/toolkit";

import TodosReducer from "./reducers";

const store = configureStore({
  reducer: {
    tasks: TodosReducer,
  },
});

export default store;
//cosa significa deprecato? sono le funzioni che venivano usate prima ma che sono diventate obsolete.
//come inizializzare lo store? Bisogna andare in index.js e mettere tutta l'app dentro un <Provider>.
//per chiudere il terminale più velocemente premere control c.
// a cosa serve lo useSelector? serve a selezionare uno stato.
// a cosa serve'map'? a mappare l'array per poi fare una ricerca.
//come eliminare un elemento da un array? usa filter.

