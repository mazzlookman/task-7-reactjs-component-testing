import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Data yang akan dijadikan state dan disimpan di Redux Store
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// Satu state itu berisi array of data (disini Todo)
interface TodoState {
    todos: Todo[];
}

// Initial state (memberi nilai awal pada state)
const initialState: TodoState = {
    todos: [],
}

// Slice untuk menghandle state, action, dan reducer
const todoSlice = createSlice({
    // Nama slice
    name: 'todo',

    // Nilai awal state yang otomatis di-assign oleh redux ke parameter pertama pada function actions
    initialState,

    // Reducer untuk menangani semua actions
    reducers: {
        // action addTodo
        addTodo: (state, payloadAction: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now(),
                // Untuk action.type nya sudah dihandle otomatis oleh Redux
                // Kita hanya perlu fokus ke payload saja
                text: payloadAction.payload,
                completed: false                
            };
            state.todos.push(newTodo);
        },

        // action toggleTodo
        toggleTodo: (state, payloadAction: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === payloadAction.payload);
            if (todo) todo.completed = !todo.completed;
        },

        // action removeTodo
        removeTodo: (state, payloadAction: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== payloadAction.payload)
        }
    }
});

// export actions as function
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

// export reducer;
export default todoSlice.reducer;