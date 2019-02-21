import React, { Component } from 'react';
import { getUsers } from '../api';

class Users extends Component {
  state = {
    users: [],
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map(user => (
          <p>{user.username}</p>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    getUsers().then(users => {
      this.setState({ users });
    });
  };
}

export default Users;
