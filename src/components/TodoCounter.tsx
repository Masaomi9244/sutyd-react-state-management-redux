import { FC } from "react";

type Props = {
  todoCounter: number;
};

export const ToDoCounter: FC<Props> = ({ todoCounter }) => {
  return <h2>TODO: {todoCounter}件</h2>;
};
