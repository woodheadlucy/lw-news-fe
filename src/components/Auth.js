import React, { Component } from 'react';
import './Auth.css';

class Auth extends Component {
  state = { username: 'jessjelly', error: null };

  render() {
    const { user, children } = this.props;
    const { username } = this.state;

    if (user && user.username) return children;
    return (
      <div className="containerLogin">
        <form className="login" onSubmit={this.handleSubmit}>
          <label className="username">Username:</label>
          <input onChange={this.handleChange} value={username} />
          <button type="submit">Login</button>
        </form>
        {this.state.error && <h1>Invalid Username</h1>}
      </div>
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
    login(username);
    this.setState({ username: '' }).catch({ error });
  };
}

export default Auth;
