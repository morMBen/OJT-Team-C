import React from 'react';
import './AddTodo.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent<EventTarget>) => void;
}

export const AddTodo: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <div>
      <form className='addTodoForm' onSubmit={handleAddTodo}>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='add a todo'
          className='addTodoField'
        />
        <button type='submit' className='todoButton'>
          Add Todo
        </button>
      </form>
    </div>
  );
};
