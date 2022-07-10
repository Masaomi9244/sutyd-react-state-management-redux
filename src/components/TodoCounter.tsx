import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state";
import { Todo } from "src/types";

export const ToDoCounter: FC = () => {
  const todos: Todo[] = useSelector((state: RootState) => state.todos);
  return <h2>TODO: {todos.length}件</h2>;
};
