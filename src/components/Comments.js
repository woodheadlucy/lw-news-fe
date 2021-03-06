import React, { Component } from 'react';
import { getCommentsByArticle, deleteResourceById } from '../api';
import moment from 'moment';
import Voter from './Voter';
import CommentAdd from './CommentAdd';
import './Comments.css';
import DeleteResource from './DeleteResource';

class Comments extends Component {
  state = {
    comments: [],
    updateVote: 0,
  };
  render() {
    const { comments } = this.state;
    const { user, article_id, newComment } = this.props;

    return (
      <div className="articleBox">
        <CommentAdd
          user={user}
          comment_id={comments.comment_id}
          article_id={article_id}
          handleNewComment={this.handleNewComment}
        />
        {comments.map(comment => (
          <div className="comment" key={comment.comment_id}>
            <p className="commentBody">{comment.body}</p>
            <p className="createdAt">
              {moment(comment.created_at, 'YYYY-MM-DD-Thh:mm:ss').fromNow()}
            </p>
            <p className="username">Username: {comment.username}</p>

            <Voter
              className="votes2"
              votes={comment.votes}
              comment_id={comment.comment_id}
              article_id={comment.article_id}
            />
            {comment.username === user.username && (
              <DeleteResource
                comment={comment}
                deleteCommFunction={this.handleDeleteComment}
              />
            )}
          </div>
        ))}
        {newComment}
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

  handleDeleteComment = commentToDelete => {
    const { article_id, comment_id } = commentToDelete;
    const currentComms = this.state.comments;
    const restOfComms = currentComms.filter(
      comment => comment.comment_id !== commentToDelete.comment_id
    );
    deleteResourceById(article_id, comment_id).then(data => {
      this.setState(prevState => ({
        comments: (prevState.comments = restOfComms),
      }));
    });
  };

  handleNewComment = newComment => {
    const currentComms = this.state.comments;
    const restOfComms = [newComment, ...currentComms];
    this.setState(prevState => ({
      comments: (prevState.comments = restOfComms),
    }));
  };
}

export default Comments;
