import React from 'react';
import '../App.css';
import Users from './Users';
const Sidebar = ({ user, logout }) => {
  return (
    <div>
      <section className="sidebar">
        {' '}
        <p>Welcome to NC news {`${user.username}`}</p>
        <button onClick={logout}>Logout</button>
      </section>
      <section>
        <Users />
      </section>
    </div>
  );
};

export default Sidebar;
