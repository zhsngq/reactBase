import React, { Component } from 'react';
// import Hello from './part/hello';
import Post from './part/post';
import List from './part/list';

class App extends Component {
  render() {
    return (
      <div>
        <List url='http://localhost:9801/api/member'>
          <Post />
        </List>
      </div>
    );
  }
}

export default App;
