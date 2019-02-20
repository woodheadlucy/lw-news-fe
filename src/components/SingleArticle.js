import React, { Component } from 'react';
import Moment from 'moment';
import { addCommentByArticleId, deleteArticleByID } from '../api';
import { getArticleById } from '../api';
import ArticleCardHomePage from './ArticleCardHomePage';
import Comments from './Comments';
import { Router } from '@reach/router';
import CommentAdd from './CommentAdd';

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    votes: 0,
    commentsShown: false,
  };

  render() {
    const { article, commentsShown } = this.state;
    // const { article_id, title, body } = this.props;
    return (
      <div className="SingleArticle">
        <h2>{article.title}</h2>
        <p>{article.topic}</p>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        <p>Author: {article.author}</p>
        <p>{Moment(article.created_at, 'YYYY-MM-DD-Thh:mm:ss').fromNow()}</p>
        <button onClick={this.handleDeleteArticle} className="deleteButton">
          Delete this article
        </button>
        <CommentAdd />
        <button className="commentsButton" onClick={this.toggleComments}>
          {commentsShown ? 'Hide comments' : 'Show comments'}
        </button>
        {commentsShown && <Comments comments={article.article_id} />}

        <Router>
          <Comments path="/articles/:article_id/comments" />
        </Router>
      </div>
    );
  }

  toggleComments = () => {
    const { commentsShown } = this.state;
    this.setState({ commentsShown: !commentsShown });
  };

  postedComment = (body, username, article_id) => {
    addCommentByArticleId(body, username, article_id).then(comment => {
      this.setState(prevState => ({
        comments: [comment, ...prevState.comments],
      }));
    });
  };

  handleDeleteArticle = () => {
    const article_id = this.state.article.article_id;
    deleteArticleByID(article_id);
  };

  componentDidMount() {
    const { article_id } = this.props;
    console.log(this.props, '<<<card');
    getArticleById(article_id).then(article => {
      this.setState({ article });
    });
  }
}

export default SingleArticle;
