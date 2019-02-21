import React, { Component } from 'react';
import '../App.css';
import { getArticles } from '../api';
import { Link } from '@reach/router';
import ArticleCardHomePage from './ArticleCardHomePage';
import SingleArticle from './SingleArticle';
import { addArticle } from '../api';
import SortBy from './SortBy';
import AddArticle from './AddArticle';

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
  };
  render() {
    const { articles, isLoading } = this.state;
    const { topics, user } = this.props;

    return (
      <section className="list">
        {isLoading ? (
          <h3>Loading articles...</h3>
        ) : (
          <div className="main">
            <SortBy sortedArticles={this.sortedArticles} />
            <AddArticle topics={topics} user={user} />{' '}
            {articles.map(article => (
              <p key={article.article_id}>
                <Link
                  className="linktoArticle"
                  to={`/articles/${article.article_id}`}
                >
                  <ArticleCardHomePage article={article} />
                </Link>
              </p>
            ))}
            <SingleArticle article={this.article} />
          </div>
        )}
      </section>
    );
  }

  postedArticle = (title, topic, body, username) => {
    addArticle(title, topic, body, username).then(article => {
      this.setState(prevState => ({
        articles: [article, ...prevState.articles],
      }));
    });
  };

  componentDidMount() {
    this.fetchArticles();
    // this.addScrollEventListener();
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

  sortedArticles = articles => {
    this.setState({ articles });
  };
}

export default Articles;
