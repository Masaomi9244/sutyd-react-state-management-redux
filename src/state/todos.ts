import { Reducer } from "react";
import { Todo } from "src/types";

const ADD_TODO = "ADD_TODO";

const addTodo = (text: Todo["text"]) => {
  return { type: ADD_TODO, payload: { text } } as const;
};

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

type Action = ReturnType<typeof addTodo>;

export const todosReducer: Reducer<Todo[], Action> = (
  state = TODOS,
  action
) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      };
      return [...state, newTodo];
    }

    default:
      return state;
  }
};
