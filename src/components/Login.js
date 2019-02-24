import React from 'react';
import './Login.css';
import { Link } from '@reach/router';
const Login = ({ user, logout }) => {
  return (
    <div className="loginAfter">
      <section className="usernameAfter">
        {' '}
        <p>Welcome back {`${user.username}`}</p>
        <button onClick={logout}>Logout</button>
        <br />
        <Link className="allUsersLink" to={`/users`}>
          Show all users
        </Link>
      </section>
    </div>
  );
};

export default Login;
