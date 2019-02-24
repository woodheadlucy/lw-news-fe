import React from 'react';

const DeleteResource = ({ deleteFunction, comment, deleteCommFunction }) => {
  return (
    <button
      className="deleteButton"
      onClick={comment ? () => deleteCommFunction(comment) : deleteFunction}
    >
      Delete
    </button>
  );
};

export default DeleteResource;
