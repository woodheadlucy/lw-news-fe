import React from 'react';
import '../App.css';

const Sidebar = ({ user, logout }) => {
  return (
    <section className="sidebar">
      {' '}
      <p>Welcome to NC news {`${user.username}`}</p>
      <button onClick={logout}>Logout</button>
    </section>
  );
};

export default Sidebar;
