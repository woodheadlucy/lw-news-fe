import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Login from './components/Login';
// import LandingPage from './components/LandingPage';
import Articles from './components/Articles';
import { Router } from '@reach/router';
import Auth from './components/Auth';
import { fetchUser, getTopics } from './api';
import './App.css';
import SingleArticle from './components/SingleArticle';
import NoMatch from './components/NoMatch';
import Users from './components/Users';
import SingleUserArticles from './components/SingleUserArticles';

class App extends Component {
  state = {
    user: {},
    topics: [],
  };
  render() {
    const { user, topics } = this.state;
    console.log(topics);

    return (
      <div className="App">
        <Header />
        <Nav user={user} topics={topics} />

        <Auth user={user} login={this.setUser}>
          <Router className="main">
            <Articles path="/" topics={topics} user={user} />
            <Articles path="/topics/:topic" topics={topics} user={user} />
            <SingleArticle path="/articles/:article_id" user={user} />
            <Users path="/users" />
            {/* add user back if doesnt work */}
            <SingleUserArticles path="/users/:username/articles" />
            <NoMatch default />
          </Router>
          {/* <LandingPage /> */}
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
    console.log('fetching topics');
    getTopics().then(topics => {
      this.setState({ topics });
    });
  };
  setUser = user => {
    fetchUser(user).then(user => {
      this.setState({ user });
    });
  };

  clearUser = () => {
    this.setState({ user: '' });
  };
}

export default App;
