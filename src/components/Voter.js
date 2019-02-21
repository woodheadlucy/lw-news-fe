import React, { Component } from 'react';
import { voteOnResource } from '../api';
import './SingleArticle.css';
class Voter extends Component {
  state = {
    voteChange: 0,
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div className="votes">
        <button
          className="up"
          onClick={() => this.addVote(1)}
          disabled={voteChange === 1}
        >
          Vote up
        </button>

        <p className="actualVotes">Votes: {votes + voteChange}</p>
        <button
          className="down"
          onClick={() => this.addVote(-1)}
          disabled={voteChange === -1}
        >
          Vote down
        </button>
      </div>
    );
  }

  addVote = direction => {
    const { article_id, comment_id } = this.props;
    if (comment_id) {
      voteOnResource({ comment_id, direction, article_id });
    } else voteOnResource({ article_id, direction });
    this.setState({ voteChange: direction });
  };
}

export default Voter;
