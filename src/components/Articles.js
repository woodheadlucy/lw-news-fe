import React, { Component } from 'react';
import '../App.css';
import { getArticles } from '../api';
import SortBy from './SortBy';
import { Router, Link } from '@reach/router';
import ArticleCardHomePage from './ArticleCardHomePage';
import SingleArticle from './SingleArticle';

class Articles extends Component {
  state = {
    articles: [],
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="main">
        {/* <SortBy sortedArticles={this.sortedArticles} /> */}

        {articles.map(article => (
          <p key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <ArticleCardHomePage article={article} />
            </Link>
          </p>
        ))}
        <SingleArticle article={this.article} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    const { topic } = this.props;
    getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };

  sortedArticles = articles => {
    this.setState({ articles });
  };
}

export default Articles;
