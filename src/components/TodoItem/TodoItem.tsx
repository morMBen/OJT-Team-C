import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import produce from 'immer';

import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap';
import { Todo } from '../../model';
import './TodoItem.css';
import { editIcon, shareIcon, trashIcon } from '../../UI/fontAwsomeIcons';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [isEditModeOn, setIsEditModeOn] = useState<boolean>(false);
  const editTodoRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    setIsEditModeOn(true);
  };

  const handleDelete = (): void => {
    const todosAfterChanges = todos.filter((e: Todo) => {
      return e.id !== todo.id;
    });
    setTodos(todosAfterChanges);
  };

  const handleSave = (): void => {
    setTodos((todosAfterUpdating) =>
      todosAfterUpdating.map((t: Todo) => {
        if (t.id === todo.id && editTodoRef.current?.value) {
          t.todo = editTodoRef.current?.value;
        }
        return t;
      })
    );
    setIsEditModeOn(false);
  };

  return (
    <div className='todoItem'>
      {isEditModeOn && (
        <>
          <Form>
            <Form.Control
              type='text'
              placeholder={todo.todo}
              id='edit-todo-input'
              ref={editTodoRef}
            />
            <Button type='submit' onClick={handleSave}>
              Save
            </Button>
            <Button onClick={() => setIsEditModeOn(false)}>Cancel</Button>
          </Form>
        </>
      )}
      {!isEditModeOn && (
        <>
          <p>{todo.todo}</p>
          <DropdownButton align='end' title='' id='dropdown-menu-align-end'>
            <Dropdown.Item eventKey='1' id='dropdown-item' onClick={handleEdit}>
              <p>Edit</p> <FontAwesomeIcon icon={editIcon} />
            </Dropdown.Item>
            <Dropdown.Item
              eventKey='2'
              id='dropdown-item'
              onClick={handleDelete}
            >
              <p>Delete</p> <FontAwesomeIcon icon={trashIcon} />
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey='3' id='dropdown-item'>
              <p>Share</p>
              <FontAwesomeIcon icon={shareIcon} />
            </Dropdown.Item>
          </DropdownButton>
        </>
      )}
    </div>
  );
};
