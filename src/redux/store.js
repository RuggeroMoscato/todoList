import { createSlice } from "@reduxjs/toolkit";

export const Global = createSlice({
  name: "global",
  initialState: {
    ip: '',
    page: false,
  },
  reducers: {
    saveIP: (state, action) => {
      state.ip = action.payload;
    },
    savePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { saveIP, savePage } = Global.actions;
export default Global.reducer;


//cosa significa deprecato? sono le funzioni che venivano usate prima ma che sono diventate obsolete.
//come usare lo store? Per prima cosa bisogna andare in index.js e mettere tutta l'app dentro un <Provider>.
