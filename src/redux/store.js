import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import TodosReducer from "./reducers";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const reducer = combineReducers({
  tasks: TodosReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);



//cosa significa deprecato? sono le funzioni che venivano usate prima ma che sono diventate obsolete.
//come inizializzare lo store? Bisogna andare in index.js e mettere tutta l'app dentro un <Provider>.
//per chiudere il terminale più velocemente premere control c.
// a cosa serve lo useSelector? serve a selezionare uno stato.
// a cosa serve'map'? a mappare l'array per poi fare una ricerca.
//come eliminare un elemento da un array? usa filter.
//come aumentare lo spazio fra un elemento e l'altro? usa gap nel css.
//cosa è redux persist? è una libreria che permette al sistema di non dimenticare lo state prima di aggiornarsi.
//come mettere un elemento in un array? usa push.
//cosa è nanoid? è una funzione che attribuisce un id casuale ad un elemento.
//come importare i font? importa i font da google cercando 'fonts' e scaricando il font desiderato.
//come utilizzare il redux persist? inizializzalo nello store come fatto qui e importa PersistGate in 'index.js'.
//cosa è useEffect? useEffect è un modo per chiamare una funzione quando un elemento viene cambiato.