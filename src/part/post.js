import React, { Component } from 'react';
import {List,ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

/**
 * 帖子测试列表的组件
 */
class Post extends Component {

  render() {
    return (
      <ListItem style={{color:darkBlack}} primaryText={this.props.data.id +':'+this.props.data.name } 
       rightIcon={<ActionInfo />} />
    );
  }
}

export default Post;
