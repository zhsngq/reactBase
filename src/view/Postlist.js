import React, { Component } from 'react';
import Post from './../part/post';
import List from './../part/list';

class Postlist extends Component {
  render() {
    return (
      <div>
        <span className="pure-u-1-6" > #id </span>
        <span className="pure-u-1-6" > name </span>
        <List url='http://localhost:9801/api/member'>
          <Post />
        </List>
      </div>
    );
  }
}

export default Postlist;
