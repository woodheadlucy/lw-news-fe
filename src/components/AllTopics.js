import React from 'react';
import { Link } from '@reach/router';
import './AllTopics.css';
const AllTopics = ({ topics }) => {
  return (
    <div>
      {topics.map(topic => (
        <ul>
          <li key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>{topic.slug} </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AllTopics;
