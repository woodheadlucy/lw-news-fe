import React, { Component } from 'react';
import '../App.css';
import { getArticles } from '../api';
import { Link } from '@reach/router';
import ArticleCardHomePage from './ArticleCardHomePage';
import { addArticle } from '../api';
import SortBy from './SortBy';
import AddArticle from './AddArticle';
import PropTypes from 'prop-types';

class Articles extends Component {
  state = {
    articles: [],
    addArticle: false,
    isLoading: true,
  };
  render() {
    const { articles, isLoading } = this.state;
    const { topics, user } = this.props;
    console.log(this.props, '<<<thisprops');
    const hasBeenDeleted = this.props.location
      ? this.props.location.state.articleDeleted
      : false;

    return (
      <section className="list">
        {hasBeenDeleted && <p>Article has been deleted!</p>}
        {isLoading ? (
          <h3>Loading articles...</h3>
        ) : (
          <div className="main">
            <SortBy sortArticles={this.sortArticles} />
            <AddArticle
              topics={topics}
              user={user}
              toggleAddArticle={this.toggleAddArticle}
            />{' '}
            {articles.map(article => (
              <section key={article.article_id}>
                <Link
                  className="linktoArticle"
                  to={`/articles/${article.article_id}`}
                >
                  <ArticleCardHomePage article={article} />
                </Link>
              </section>
            ))}
          </div>
        )}
      </section>
    );
  }

  postArticle = (title, topic, body, username) => {
    addArticle(title, topic, body, username).then(article => {
      this.setState(prevState => ({
        articles: [article, ...prevState.articles],
      }));
    });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) this.fetchArticles();
  }

  fetchArticles = () => {
    const { topic } = this.props;

    getArticles(topic).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  sortArticles = articles => {
    this.setState({ articles });
  };
}

export default Articles;
