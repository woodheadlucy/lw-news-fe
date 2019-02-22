import React, { Component } from 'react';
import '../App.css';
import './Nav.css';
import { Link } from '@reach/router';

class Nav extends Component {
  state = {
    topics: [],
  };

  render() {
    // const { topics } = this.state;
    const { topics } = this.props;

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
}

export default Nav;
