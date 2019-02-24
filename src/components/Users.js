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
          <div className="userCard">
            <p className="theUser" key={user.username}>
              <Link to={`/users/${user.username}/articles`}>
                {user.username}
              </Link>
            </p>
            <p>{user.name}</p>
            <img
              src="https://cdn3.iconfinder.com/data/icons/login-6/512/LOGIN-10-512.png"
              width="100"
              height="100"
              alt="profile avatar"
            />
          </div>
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
