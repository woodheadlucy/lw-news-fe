import React from 'react';
import './Sidebar.css';
import { Link } from '@reach/router';
const Sidebar = ({ user, logout }) => {
  return (
    <div>
      <section className="sidebar">
        {' '}
        <p>Welcome to NC news {`${user.username}`}</p>
        <button onClick={logout}>Logout</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link className="allUsersLink" to={`/users`}>
          Show all users
        </Link>
      </section>
    </div>
  );
};

export default Sidebar;
