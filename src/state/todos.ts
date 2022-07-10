import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "src/types";

const initialState: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Pick<Todo, "text">>) => {
      state.push({
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;

// -----------Redux toolkitを使う前のコード-------------

// import { Reducer } from "react";
// import { Todo } from "src/types";

// // const
// const ADD_TODO = "ADD_TODO";
// const TOGGLE_TODO = "TOGGLE_TODO";

// // action
// export const addTodo = (text: Todo["text"]) => {
//   return { type: ADD_TODO, payload: { text } } as const;
// };

// export const toggleTodo = (id: Todo["id"]) => {
//   return { type: TOGGLE_TODO, payload: { id } } as const;
// };

// type Action = ReturnType<typeof addTodo | typeof toggleTodo>;

// //initial state
// const TODOS: Todo[] = [
//   { id: 1, text: "foo", isDone: false },
//   { id: 2, text: "bar", isDone: true },
// ];

// // reducer
// export const todosReducer: Reducer<Todo[], Action> = (
//   state = TODOS,
//   action
// ): Todo[] => {
//   switch (action.type) {
//     case ADD_TODO: {
//       const newTodo = {
//         id: state.length + 1,
//         text: action.payload.text,
//         isDone: false,
//       };
//       return [...state, newTodo];
//     }
//     case TOGGLE_TODO: {
//       return state.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, isDone: !todo.isDone };
//         }
//         return todo;
//       });
//     }
//     default:
//       return state;
//   }
// };
