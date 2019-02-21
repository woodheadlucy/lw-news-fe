import React, { Component } from 'react';
import Moment from 'moment';
import { addCommentByArticleId, deleteArticleById } from '../api';
import { getArticleById } from '../api';
import Comments from './Comments';
import { Router, navigate } from '@reach/router';
import './SingleArticle.css';
import Voter from './Voter';
import DeleteArticle from './DeleteArticle';
class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],

    commentsShown: false,
    isLoading: true,
  };

  render() {
    const { article, commentsShown, isLoading } = this.state;
    const { user, article_id } = this.props;

    if (isLoading) return <h1>Loading article...</h1>;
    return (
      <div className="articleBox">
        <h2 className="title">{article.title}</h2>
        <p className="topic">{article.topic}</p>
        <p className="body">{article.body}</p>
        {/* same logic so can only delete own article and own comment */}
        {article.author === user.username ? (
          <p>Votes:{article.votes}</p>
        ) : (
          <Voter votes={article.votes} article_id={article.article_id} />
        )}
        <p className="author">Author: {article.author}</p>
        <p>{Moment(article.created_at, 'YYYY-MM-DD-Thh:mm:ss').fromNow()}</p>
        <DeleteArticle
          article_id={article_id}
          deleteFunction={this.handleDeleteArticle}
        />

        <button className="commentsButton" onClick={this.toggleComments}>
          {commentsShown ? 'Hide comments' : 'Show comments'}
        </button>
        {commentsShown && (
          <Comments
            comments={article.article_id}
            user={user}
            article_id={article_id}
          />
        )}
        <Router>
          <Comments path="/articles/:article_id/comments" />
        </Router>
      </div>
    );
  }

  ///need to make sure it redirects!!!!!!!!!!
  handleDeleteArticle = () => {
    const { article_id } = this.props;
    deleteArticleById(article_id).then(data => {
      console.log(data);
      navigate('/');
    });
  };
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

  // componentDidMount() {
  //   const { article_id } = this.props;
  //   console.log(this.props, '<<<card');
  //   getArticleById(article_id).then(article => {
  //     this.setState({ article });
  //   });
  // }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle() {
    const { article_id } = this.props;
    if (
      article_id &&
      getArticleById(article_id).then(article => {
        this.setState({ article, isLoading: false });
      })
    );
  }
}

export default SingleArticle;
