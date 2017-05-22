import React, { Component } from 'react';
import Post from './../part/post';
import Zlist from './../tool/zlist';
import {List} from 'material-ui/List';
import Api from './../site/api';

class Postlist extends Component {
  render() {
    return (
      <List>
        <Zlist url={new Api().getExperimentList()}>
          <Post />
        </Zlist>
      </List>
    );
  }
}

export default Postlist;
