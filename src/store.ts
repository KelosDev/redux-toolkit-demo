// blocco di base dove salvo le informazioni

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './redux/counter/counter.slice'
import todoReducer from './redux/todo/todo.slice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})

//Specifico un tipo (che è una variabile) che ha lo stesso type del return type di getState.
//In sostanza a me interessa solo il tipo che ritorna la funzione, non il contenuto
export type RootState = ReturnType<typeof store.getState> // inferisco la struttura typescript del mio state dal return type di questa funzione

export type AppDispatch = typeof store.dispatch // ? perchè in rootstate c'è returntype e qui no ?
