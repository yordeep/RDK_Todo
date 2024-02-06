import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id:1,
        text:"Hello World",
        editable:false,
    }]
}

export const TodoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
                editable:action.payload.isTodoEditable
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        editTodo:(state,action)=>{
            state.todos.map((todo)=>todo.id === action.payload ? todo.editable = !todo.editable : todo)
        },
        updateTodo:(state,action)=>{
            state.todos.map((todo)=>todo.id === action.payload ? todo.text = action.payload.text : todo)
        }
    }
})

export const {addTodo,removeTodo,editTodo,updateTodo} = TodoSlice.actions

export const  TodoReducer = TodoSlice.reducer