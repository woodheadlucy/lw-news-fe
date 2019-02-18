import React, { Component } from 'react';

class ArticleInfo extends Component {
  state = {
    updateVote: 0,
  };
  render() {
    const { article } = this.props;
    const { updateVote } = this.state;
    console.log(this.props, '<<<<<<<INFO');
    return (
      <div className="ArticleInfo">
        <p>Submitted by: {article.author}</p>
        <p>Votes: {article.votes + updateVote}</p>
      </div>
    );
  }
}

export default ArticleInfo;
