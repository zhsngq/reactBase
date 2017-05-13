import React, { Component } from 'react';
// import Hello from './part/hello';
import List from './part/list';

class App extends Component {
  render() {
    return (
      <div>
        <List url='http://localhost:9801/api/member' type='post' />
        <List url='http://localhost:9801/api/member' type='avatar' />
        <List url='http://localhost:9801/api/member' type='aatar' />
      </div>
    );
  }
}

export default App;
