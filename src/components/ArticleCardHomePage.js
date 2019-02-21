import React from 'react';
import './ArticleCardHome.css';

const ArticleCardHomePage = ({ article }) => {
  return (
    <div className="articleCard">
      <h2 className="title1">{article.title}</h2>
      <h3 className="author1">{article.author}</h3>
      <p className="body1">{article.body}</p>
    </div>
  );
};

export default ArticleCardHomePage;
