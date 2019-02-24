import React, { Component } from 'react';
import './Auth.css';

class Auth extends Component {
  state = { username: 'jessjelly' };

  render() {
    const { user, children } = this.props;
    const { username } = this.state;

    if (user && user.username) return children;
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <label className="username">Username:</label>
        <input onChange={this.handleChange} value={username} />
        <button type="submit">Login</button>
      </form>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ username: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { login } = this.props;
    const { username } = this.state;
    login(username);
    this.setState({ username: '' });
  };
}

export default Auth;
