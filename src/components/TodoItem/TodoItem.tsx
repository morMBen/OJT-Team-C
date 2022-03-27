import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Todo } from '../../model';
import './TodoItem.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleEdit = () => {};
  return (
    <div className='todoItem'>
      {todo.todo}
      <DropdownButton align='end' title='' id='dropdown-menu-align-end'>
        <Dropdown.Item eventKey='1' onClick={handleEdit}>
          Edit
        </Dropdown.Item>
        {/* <Dropdown.Item eventKey='2'>Delete</Dropdown.Item> */}
        <Dropdown.Divider />
        <Dropdown.Item eventKey='3'>Share </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
