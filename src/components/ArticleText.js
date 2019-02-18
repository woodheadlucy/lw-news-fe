import React from 'react';

const ArticleText = ({ article }) => {
  console.log(this.props, 'ARTICLE TEXT');
  const { title, body, topic } = article;
  return (
    <div className="articleText">
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{topic}</p>
    </div>
  );
};
export default ArticleText;
