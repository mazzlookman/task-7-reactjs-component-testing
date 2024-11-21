import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todo-slice";


// membuat Store Redux
export const store = configureStore({
    // menentukan reducer untuk state
    reducer: {
        // nama_state: reducernya; Bisa lebih dari satu yaa
        todo: todoReducer,
    }
});

// export semua State yang ada di Store Redux
export type RootState = ReturnType<typeof store.getState>;

// export dispatch (function untuk mengirim action terhadap state di store)
export type AppDispatch = typeof store.dispatch;