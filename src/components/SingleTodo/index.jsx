import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';
import { CheckSquare, Edit3, MinusSquare, Trash2 } from 'react-feather';
import ReactTooltip from 'react-tooltip';

const SingleTodo = ({
  todo,
  currentTodoId,
  isProcessing,
  handleEditTodo,
  handleTodoCompleted,
  handleDeleteTodo,
}) => {
  return (
    <div className={`${todo.completed ? 'completed' : ''} single-todo`}>
      <h4>{todo.title}</h4>
      {isProcessing && currentTodoId === todo.id ? (
        <div className="center">
          <BeatLoader size={5} />
        </div>
      ) : (
        <small>{todo.description}</small>
      )}
      {!isProcessing && (
        <div className="icons-box">
          <ReactTooltip place="top" type="dark" effect="solid" />
          <Edit3
            onClick={() => handleEditTodo(todo.id)}
            className="mr pointer"
            data-testid="edit"
            data-tip="Edit"
            color="white"
            size={40}
          />
          {todo.completed ? (
            <MinusSquare
              onClick={() => handleTodoCompleted(todo.id)}
              className="pointer mr"
              data-testid="incomplete"
              color="white"
              data-tip="Mark incomplete"
              size={40}
            />
          ) : (
            <CheckSquare
              onClick={() => handleTodoCompleted(todo.id)}
              className="pointer mr"
              data-testid="complete"
              color="white"
              data-tip="Mark complete"
              size={40}
            />
          )}
          <Trash2
            onClick={() => handleDeleteTodo(todo.id)}
            className="pointer"
            data-testid="delete"
            data-tip="Delete"
            color="red"
            size={40}
          />
        </div>
      )}
    </div>
  );
};

SingleTodo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  currentTodoId: PropTypes.number.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleTodoCompleted: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
};

export default SingleTodo;
