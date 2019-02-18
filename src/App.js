import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Articles from './components/Articles';
import { Router } from '@reach/router';

import './App.css';
import ArticleCard from './components/ArticleCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Sidebar />
        <Footer />

        <Router className="main">
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <ArticleCard path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
