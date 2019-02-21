import React, { Component } from 'react';
import Moment from 'moment';
import { addCommentByArticleId, deleteArticleById } from '../api';
import { getArticleById } from '../api';
import Comments from './Comments';
import { Router, navigate } from '@reach/router';
import './SingleArticle.css';
import Voter from './Voter';
import DeleteArticle from './DeleteArticle';
import Error from './Error';
class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],

    commentsShown: false,
    isLoading: true,
    errorStatus: null,
  };

  render() {
    const { article, commentsShown, isLoading, errorStatus } = this.state;
    const { user, article_id } = this.props;
    // const { articleDeleted } = this.props.location;
    if (errorStatus !== null) return <Error errorStatus={errorStatus} />;
    if (isLoading) return <h1>Loading article...</h1>;
    return (
      <div className="articleBox">
        {/* {articleDeleted && <p>Article deleted!</p>} */}
        <h2 className="title2">{article.title}</h2>
        <p className="topic2">{article.topic}</p>
        <p className="body2">{article.body}</p>
        {/* same logic so can only delete own article and own comment */}
        {article.author === user.username ? (
          <p>Votes:{article.votes}</p>
        ) : (
          <Voter votes={article.votes} article_id={article.article_id} />
        )}
        <p className="author2">Author: {article.author}</p>
        <p className="createdAt2">
          {Moment(article.created_at, 'YYYY-MM-DD-Thh:mm:ss').fromNow()}
        </p>

        {article.author === user.username && (
          <DeleteArticle
            article_id={article_id}
            deleteFunction={this.handleDeleteArticle}
          />
        )}

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

  handleDeleteArticle = () => {
    const { article_id } = this.props;
    deleteArticleById(article_id).then(data => {
      console.log(data);
      navigate('/', { state: { articleDeleted: true } });
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

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle() {
    const { article_id } = this.props;
    if (
      article_id &&
      getArticleById(article_id)
        .then(article => {
          this.setState({ article, isLoading: false });
        })
        .catch(err => {
          this.setState({ errorStatus: err.response.status });
        })
    );
  }
}

export default SingleArticle;
