import React from 'react';
import './Login.css';
import { Link } from '@reach/router';
const Login = ({ user, logout }) => {
  return (
    <div className="loginAfter">
      <section className="usernameAfter">
        {' '}
        <p>Welcome back {`${user.username}`}</p>
        <img
          src="https://cdn3.iconfinder.com/data/icons/login-6/512/LOGIN-10-512.png"
          width="30"
          height="30"
          alt="profile avatar"
        />
        <br />
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
