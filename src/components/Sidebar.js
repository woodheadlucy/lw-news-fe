import React from 'react';
import '../App.css';
import { Link } from '@reach/router';
const Sidebar = ({ user, logout }) => {
  return (
    <div>
      <section className="sidebar">
        {' '}
        <p>Welcome to NC news {`${user.username}`}</p>
        <button onClick={logout}>Logout</button>
        <Link to={`/users`}>All users</Link>
      </section>
    </div>
  );
};

export default Sidebar;
