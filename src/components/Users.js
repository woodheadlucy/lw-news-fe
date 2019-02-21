import React, { Component } from 'react';
import { getUsers } from '../api';
import { Link } from '@reach/router';

class Users extends Component {
  state = {
    users: [],
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map(user => (
          <p key={user.username}>
            <Link to={`/users/${user.username}/articles`}>{user.username}</Link>
          </p>
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
