import React from "react";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return <div className="todoItem">{todo.todo}</div>;
};
