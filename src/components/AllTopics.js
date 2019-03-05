import React from 'react';
import { Link } from '@reach/router';
import './AllTopics.css';
const AllTopics = ({ topics }) => {
  return (
    <div>
      <h1>All Topics</h1>
      {topics.map(topic => (
        <ul>
          <li key={topic.slug}>
            <Link className="allTopics" to={`/topics/${topic.slug}`}>
              {topic.slug}{' '}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AllTopics;
