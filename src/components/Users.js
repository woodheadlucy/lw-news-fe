import React, { Component } from 'react';
import { getUsers } from '../api';
import { Link } from '@reach/router';
import './Users.css';

class Users extends Component {
  state = {
    users: [],
  };
  render() {
    const { users } = this.state;
    return (
      <div className="allUsers">
        {users.map(user => (
          <p className="theUser" key={user.username}>
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
