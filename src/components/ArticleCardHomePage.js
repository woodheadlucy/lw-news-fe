import React from 'react';

const ArticleCardHomePage = ({ article }) => {
  return (
    <div className="articleCard">
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleCardHomePage;
