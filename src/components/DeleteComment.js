import React from 'react';

const DeleteComment = ({ comment, deleteCommFunction }) => {
  return (
    //IF THE USER IS THE AUTHOR OF THE ARTICLE THEN SHOW DELETE BUTTON
    <button
      className="deleteButton"
      onClick={() => deleteCommFunction(comment)}
    >
      Delete comment
    </button>
  );
};

export default DeleteComment;
