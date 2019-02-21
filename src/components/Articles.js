import React, { Component } from 'react';
import '../App.css';
import { getArticles } from '../api';
import { Link } from '@reach/router';
import ArticleCardHomePage from './ArticleCardHomePage';
import SingleArticle from './SingleArticle';
import { addArticle } from '../api';
import AddArticle from './AddArticle';

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
  };
  render() {
    const { articles, isLoading } = this.state;
    const { user } = this.props;
    if (isLoading) return <h3>Loading articles...</h3>;
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

  postedArticle = (title, topic, body, username) => {
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
    console.log(prevProps, '<<PREVPROPS', prevState, '<PREVSTATE');
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    const { topic } = this.props;
    getArticles(topic).then(articles => {
      console.log('<< also articles');
      this.setState({ articles, isLoading: false });
    });
  };

  sortedArticles = articles => {
    this.setState({ articles });
  };
}

export default Articles;
