import React from 'react';

const DeleteArticle = ({ deleteFunction }) => {
  return (
    //IF THE USER IS THE AUTHOR OF THE ARTICLE THEN SHOW DELETE BUTTON
    <button className="deleteButton" onClick={deleteFunction}>
      Delete this article
    </button>
  );
};

export default DeleteArticle;
