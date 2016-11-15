import React, { Component, PropTypes } from 'react';

class SingleUserPage extends Component {
  state = {userData: []};
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
    fetch(`/api/users/${this.props.id}`)
      .then(response => response.json())
      .then(value => {
      	const newData = [];
        if (typeof value.error === 'undefined') {
          newData.push(<li key={1}>NAME: {value.name}</li>);
          newData.push(<li key={2}>AGE: {value.age}</li>);
          newData.push(<li key={3}>AVATAR: {value.avatar}</li>);
        } else newData.push(<li key={0}>ERROR: {value.error}</li>);
        this.setState({ userData: newData.slice() });
      });
  }

  render() {
    return (
      <div>User {this.props.id}
        <ul>{this.state.userData}</ul>
      </div>
    );
  }
}

export default SingleUserPage;
