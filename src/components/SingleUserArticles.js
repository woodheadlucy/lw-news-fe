import React, { Component } from 'react';
import { Link } from '@reach/router';
import SortBy from './SortBy';
import { getArticlesByUsername } from '../api';

class SingleUserArticles extends Component {
  state = { articles: [], isLoading: true, user: {} };
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading....</p>;
    return (
      <div className="main">
        <SortBy sortedArticles={this.sortedArticles} />
        {articles.map(article => (
          <div key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = () => {
    const { username } = this.props;
    getArticlesByUsername(username)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default SingleUserArticles;
