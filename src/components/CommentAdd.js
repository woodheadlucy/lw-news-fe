import React, { Component } from 'react';

class CommentAdd extends Component {
  state = {
    body: '',
  };
  render() {
    const { body } = this.state;
    return (
      <form className="commentAdd" onSubmit={this.handleSubmit}>
        <h1>Add comment</h1>
        <input type="text" value={body} onChange={this.handleChange} />

        <button type="submit">Submit</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { article_id, user, postedcomment } = this.props;
    postedcomment(body, article_id, user);
    this.setState({ body: '' });
  };
}

export default CommentAdd;
