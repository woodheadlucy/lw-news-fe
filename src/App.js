import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
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
    console.log(this.state.user, '<<< THIS IS USER FROM APP ');
    const { user, topics } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav user={user} topics={topics} />
        <Auth user={user} login={this.setUser}>
          <Router className="main">
            <Articles path="/" />
            <Articles path="/topics/:topic" topics={topics} user={user} />
            <SingleArticle path="/articles/:article_id" user={user} />
            <Users path="/users" />
            <SingleUserArticles path="/users/:username/articles" />
            <NoMatch default />
          </Router>
          <Sidebar user={user} logout={this.clearUser} />
        </Auth>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
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
