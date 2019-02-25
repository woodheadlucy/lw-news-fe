import React, { Component } from 'react';
import '../App.css';
import { getArticles } from '../api';
import { Link } from '@reach/router';
import ArticleCardHomePage from './ArticleCardHomePage';
import { addArticle } from '../api';
import SortBy from './SortBy';
import AddArticle from './AddArticle';
import Error from './Error';
class Articles extends Component {
  state = {
    articles: [],
    addArticle: false,
    isLoading: true,
    hasErr: false,
    error: '',
  };
  render() {
    const { articles, isLoading, hasErr, error } = this.state;
    const { topics, user } = this.props;

    // const hasBeenDeleted = this.props.location
    //   ? this.props.location.state.articleDeleted
    //   : false;
    if (hasErr) return <Error resetState={this.resetState} error={error} />;

    return (
      <section className="list">
        {/* {hasBeenDeleted && <p>Article has been deleted!</p>} */}
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
    const { error } = this.state;

    getArticles(topic)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(() => this.setState({ error }));
  };

  sortArticles = articles => {
    this.setState({ articles });
  };

  resetState = () => {
    this.setState({ hasErr: false, err: '' });
  };
}

export default Articles;
