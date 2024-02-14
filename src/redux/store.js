import { createSlice, nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (text) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    },
  },
})

//cosa significa deprecato? sono le funzioni che venivano usate prima ma che sono diventate obsolete.
//come usare lo store? Per prima cosa bisogna andare in index.js e mettere tutta l'app dentro un <Provider>.
//per chiudere il terminale più velocemente premere control c.
