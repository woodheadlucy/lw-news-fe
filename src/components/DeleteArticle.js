import React from 'react';

const DeleteArticle = ({ deleteFunction }) => {
  return (
    <button className="deleteButton" onClick={deleteFunction}>
      Delete this article
    </button>
  );
};

export default DeleteArticle;
