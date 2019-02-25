import React, { Component } from 'react';
import { addCommentByArticleId } from '../api';
import './CommentAdd.css';

class CommentAdd extends Component {
  state = {
    body: '',
  };
  render() {
    const { body } = this.state;
    return (
      <div>
        <form className="commentAdd" onSubmit={this.handleSubmit}>
          <h3 className="addComm">Add a comment</h3>
          <textarea
            rows="4"
            cols="50"
            type="text"
            value={body}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { article_id, user, handleNewComment } = this.props;
    addCommentByArticleId(body, article_id, user).then(comment =>
      handleNewComment(comment)
    );
    this.setState({ body: '' });
  };
}

export default CommentAdd;
