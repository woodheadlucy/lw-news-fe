import React, { Component } from 'react';
import { getArticleById } from '../api';
import Comments from './Comments';
import ArticleInfo from './ArticleInfo';
import ArticleText from './ArticleText';

class ArticleCard extends Component {
  state = {
    article: {},
    commentsShown: false,
  };

  render() {
    const { article, commentsShown } = this.state;
    const { article_id } = this.props;
    return (
      <div className="articleCard">
        <ArticleInfo article={article} />
        <ArticleText article={article} />
        <button className="commentsButton" onClick={this.toggleComments}>
          {commentsShown ? 'Hide comments' : 'Show comments'}
        </button>
        {commentsShown && <Comments article_id={article_id} />}
      </div>
    );
  }

  toggleComments = () => {
    const { commentsShown } = this.state;
    this.setState({ commentsShown: !commentsShown });
  };

  componentDidMount() {
    const { article_id } = this.props;
    console.log(this.props, '<<<card');
    getArticleById(article_id).then(article => {
      this.setState({ article });
    });
  }
}

export default ArticleCard;
