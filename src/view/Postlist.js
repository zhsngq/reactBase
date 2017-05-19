import React, { Component } from 'react';
import Post from './../part/post';
import Zlist from './../part/zlist';
import {List} from 'material-ui/List';

class Postlist extends Component {
  render() {
    return (
      <List>
        <Zlist url='http://localhost:9801/api/member'>
          <Post />
        </Zlist>
      </List>
    );
  }
}

export default Postlist;
