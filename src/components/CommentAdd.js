import React, { Component } from 'react';
import { addCommentByArticleId } from '../api';
import Comments from './Comments';
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
          <h3 classname="addComm">Add comment</h3>
          <input type="text" value={body} onChange={this.handleChange} />

          <button type="submit">Submit</button>
        </form>
        {body && <Comments newComm={this.state.body} />}
      </div>
    );
  }

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { article_id, user } = this.props;
    addCommentByArticleId(body, article_id, user);
    this.setState({ body: '' });
  };
}

export default CommentAdd;
