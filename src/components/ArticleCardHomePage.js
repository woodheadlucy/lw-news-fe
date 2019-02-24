import React from 'react';
import './ArticleCardHome.css';
import moment from 'moment';

const ArticleCardHomePage = ({ article }) => {
  return (
    <div className="articleCard">
      <h2 className="title1">{article.title}</h2>
      <h3 className="author1">{article.author}</h3>
      <p className="body1">{article.body}</p>
      <p className="date1">
        {moment(article.created_at, 'YYYY-MM-DD-Thh:mm:ss').fromNow()}
      </p>
    </div>
  );
};

export default ArticleCardHomePage;
