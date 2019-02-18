import React, { Component } from 'react';
import '../App.css';
import './Nav.css';
import { Link } from '@reach/router';
import { getTopics } from '../api';

class Nav extends Component {
  state = {
    topics: [],
  };

  render() {
    const { topics } = this.state;
    console.log(this.state, '<<<STATE');

    return (
      <div className="nav links">
        {topics.map(topic => (
          <span key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>{topic.slug} </Link>
          </span>
        ))}
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
}

export default Nav;
