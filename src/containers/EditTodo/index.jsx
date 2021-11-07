import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import TodoForm from '../../components/TodoForm';
import { updateTodoRequestAction } from '../../redux/actions/todo/updateTodoAction';

const initialState = {
  completed: false,
  title: '',
  description: '',
};

const EditTodo = ({ todoItem, setShowEditForm }) => {
  const [formState, setFormState] = useState(todoItem);

  const dispatch = useDispatch();
  const { updating } = useSelector(state => state.todos);

  const handleUpdateSuccess = () => {
    hideForm();
  };

  const handleUpdateTodo = e => {
    e.preventDefault();
    dispatch(updateTodoRequestAction(formState, handleUpdateSuccess));
  };

  const hideForm = () => {
    setFormState(initialState);
    setShowEditForm(false);
  };

  return (
    <TodoForm
      dataTest="edit-todo"
      formState={formState}
      setFormState={setFormState}
      hideForm={hideForm}
      buttonText={updating ? 'Updating' : 'Update'}
      isProcessing={updating}
      handleSubmit={handleUpdateTodo}
    />
  );
};

EditTodo.propTypes = {
  todoItem: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  setShowEditForm: PropTypes.func.isRequired,
};

export default EditTodo;
