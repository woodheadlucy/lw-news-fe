import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Articles from './components/Articles';
import { Router } from '@reach/router';
import Auth from './components/Auth';
import { fetchUser } from './api';
import './App.css';
import ArticleCardHomePage from './components/ArticleCardHomePage';
import SingleArticle from './components/SingleArticle';

class App extends Component {
  state = {
    user: {},
  };
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav />
        <Auth user={user} login={this.setUser}>
          <Router className="main">
            <Articles path="/" />
            <Articles path="/topics/:topic" />
            <SingleArticle path="/articles/:article_id" />
          </Router>
          <Sidebar user={this.setUser} logout={this.clearUser} />
        </Auth>
        <Footer />
      </div>
    );
  }

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
