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
      <span> All topics</span>
    </div>
  );
};

export default Nav;
