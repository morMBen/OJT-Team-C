import React, { useState } from 'react';
import { Todo } from '../../model';
import { AddTodo } from '../addTodo/AddTodo';
import { TodoList } from '../todoList/Todoist';

export const TodoPage: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  };
  console.log(todos);
  return (
    <div className='todoPage'>
      <h1>Todo page</h1>
      <AddTodo todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
