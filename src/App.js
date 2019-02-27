import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Login from './components/Login';
import Articles from './components/Articles';
import { Router } from '@reach/router';
import Auth from './components/Auth';
import { fetchUser, getTopics } from './api';
import './App.css';
import SingleArticle from './components/SingleArticle';
import NoMatch from './components/NoMatch';
import Users from './components/Users';
import SingleUserArticles from './components/SingleUserArticles';
import AllTopics from './components/AllTopics';

class App extends Component {
  state = {
    user: {},
    topics: [],
  };
  render() {
    const { user, topics } = this.state;

    return (
      <div className="App">
        <Header />
        <Nav user={user} topics={topics} />
        <Auth user={user} login={this.setUser}>
          <Router className="main">
            <Articles path="/" topics={topics} user={user} />
            <AllTopics path="/topics" topics={topics} user={user} />
            <Articles path="/topics/:topic" topics={topics} user={user} />
            <SingleArticle path="/articles/:article_id" user={user} />
            <Users path="/users" />
            <SingleUserArticles path="/users/:username/articles" />
            <NoMatch default />
          </Router>
          <Login user={user} logout={this.clearUser} />
        </Auth>
      </div>
    );
  }

  componentDidMount() {
    const retrievedState = localStorage.getItem('state');
    if (retrievedState) {
      this.setState(JSON.parse(retrievedState));
    }
    this.fetchTopics();
  }
  componentDidUpdate() {
    this.handleSave();
  }
  handleSave = () => {
    localStorage.setItem('state', JSON.stringify(this.state));
  };

  fetchTopics = () => {
    getTopics().then(topics => {
      this.setState({ topics });
    });
  };
  setUser = user => {
    return fetchUser(user).then(user => {
      this.setState({ user });
    });
  };

  clearUser = () => {
    this.setState({ user: '' });
  };
}

export default App;
