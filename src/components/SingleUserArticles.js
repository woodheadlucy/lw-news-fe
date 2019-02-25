import React, { Component } from 'react';
import { Link } from '@reach/router';
import SortBy from './SortBy';
import { getArticlesByUsername } from '../api';
import './SingleUserArticles.css';
import ArticleCardHomePage from './ArticleCardHomePage';

class SingleUserArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    user: {},
    hasError: false,
    error: '',
  };
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading....</p>;
    return (
      <div className="singleUserA">
        <SortBy sortArticles={this.sortArticles} />
        {articles.map(article => (
          <div key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <ArticleCardHomePage article={article} />
            </Link>
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
        this.setState({ hasError: true, error: err });
      });
  };
}

export default SingleUserArticles;
