import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Todo } from '../../model';
import './TodoItem.css';
import { editIcon, shareIcon, trashIcon } from '../../UI/fontAwsomeIcons';

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
          <p>Edit</p> <FontAwesomeIcon icon={editIcon} />
        </Dropdown.Item>
        <Dropdown.Item eventKey='2'>
          <p>Delete</p> <FontAwesomeIcon icon={trashIcon} />
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey='3'>
          <p>Share</p>
          <FontAwesomeIcon icon={shareIcon} />
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
