import React, { Component } from 'react';

class Comments extends Component {
  state = {
    updateVote: 0,
  };
  render() {
    const { comment } = this.props;
    const { updateVote } = this.state;
    return (
      <div className="comment">
        <p className="commentAuthor">{comment.author}</p>
        <p>Votes: {comment.votes + updateVote}</p>
      </div>
    );
  }
}

export default Comments;
