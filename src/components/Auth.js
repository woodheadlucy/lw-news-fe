import React, { Component } from 'react';
import './Auth.css';
import Users from './Users';

class Auth extends Component {
  state = { username: 'jessjelly', hasError: false, error: null };

  render() {
    const { user, children } = this.props;
    const { username, hasError } = this.state;

    if (user && user.username) return children;
    return (
      <>
        <div className="containerLogin">
          <form className="login" onSubmit={this.handleSubmit}>
            <label className="username">Username:</label>
            <input onChange={this.handleChange} value={username} />
            <button type="submit">Login</button>
          </form>
          {hasError && <p>Invalid Username!</p>}
        </div>
        <div className="main">
          <p>Please login with one of the following usernames:</p>
          <Users />
        </div>
      </>
    );
  }

  handleChange = event => {
    const { value } = event.target;

    this.setState({ username: value, error: null });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { login } = this.props;
    const { username, error } = this.state;
    login(username)
      .then(() => {
        this.setState({ username: '' });
      })
      .catch(() => {
        this.setState({ error, hasError: true, username: '' });
      });
  };
}

export default Auth;
