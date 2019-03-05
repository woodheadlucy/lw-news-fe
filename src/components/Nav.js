import React from 'react';
import '../App.css';
import './Nav.css';
import { Link } from '@reach/router';

const Nav = ({ topics }) => {
  const topTopics = topics.slice(0, 3);
  return (
    <div className="nav links">
      {topTopics.map(topic => (
        <span key={topic.slug}>
          <Link className="singleLink" to={`/topics/${topic.slug}`}>
            {topic.slug}{' '}
          </Link>
        </span>
      ))}
      <Link className="Alltopics" to={`/topics`}>
        View all topics
      </Link>
    </div>
  );
};

export default Nav;
