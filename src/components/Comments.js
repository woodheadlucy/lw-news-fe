import React, { Component } from 'react';
import { getCommentsByArticle } from '../api';
import Moment from 'moment';

class Comments extends Component {
  state = {
    comments: [],
    updateVote: 0,
  };
  render() {
    const { comments } = this.state;
    return (
      <div className="comment">
        {comments.map(comment => (
          <div>
            <p key={comment.comment_id}>{comment.body}</p>
            <p>
              {Moment(comment.created_at, 'YYYY-MM-DD-Thh:mm:ss').fromNow()}
            </p>
            <p>Username: {comment.username}</p>
            <p>Votes: {comment.votes}</p>
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { comments } = this.props;
    getCommentsByArticle(comments).then(comments => {
      this.setState({ comments });
    });
  };
}

export default Comments;
