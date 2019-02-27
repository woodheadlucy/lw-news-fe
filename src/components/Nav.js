import React from 'react';
import '../App.css';
import './Nav.css';
import { Link } from '@reach/router';

const Nav = ({ topics }) => {
  return (
    <div className="nav links">
      {topics.map(topic => (
        <span key={topic.slug}>
          <Link to={`/topics/${topic.slug}`}>{topic.slug} </Link>
        </span>
      ))}
      <Link className="Alltopics" to={`/topics`}>
        View all topics
      </Link>
    </div>
  );
};

export default Nav;
