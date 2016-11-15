import React, { Component } from 'react';


class UsersPage extends Component {
  state = { userList: [] };
  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
    fetch('/api/users')
      .then(response => response.json())
      .then(value => {
        const users = value.users;
        const tmpUser = [];
        if (Array.isArray(users)) {
          const length = users.length;

          let hrefStr;
          for (let i = 0; i < length; i += 1) {
            hrefStr = `#/users/${i + 1}`;
            tmpUser.push(
              <li key={i}><a href={hrefStr}>
                {users[i].avatar}: {users[i].name} ({users[i].age})
              </a></li>
            );
          }

          this.setState({ userList: tmpUser.slice() });
        }
      });
  }

  render() {
    return (
      <div>Users
        <ol>{this.state.userList}</ol>
      </div>
    );
  }
}

export default UsersPage;
