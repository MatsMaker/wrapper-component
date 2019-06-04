import React, { Component } from 'react';

import Wrapper from './Wrapper'; // This is test wrapper component
import UsersData from './FakeData'; // Of course, it is not the best methods for getting data

class App extends Component {

  render() {

    const userList = UsersData.map(u => (
      <Wrapper
        role={u.role}
        key={u.id}>
        <div>{u.content}</div>
      </Wrapper>));

    return (
      <div>
        {userList}
      </div>
    )
  }
}

export default App;