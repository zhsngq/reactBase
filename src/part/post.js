import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { darkBlack } from 'material-ui/styles/colors';
import {Link} from 'react-router';

/**
 * 帖子测试列表的组件
 */
class Post extends Component {

  goUrl = (e,key)=>{
    console.log(e.target.firstChild);
  }

  render() {
    return (
      <Link to={'/now/'+this.props.data.id}>
        <ListItem  style={{color:darkBlack}} 
          id={this.props.data.id}
          primaryText={this.props.data.title}
          secondaryText={
            <p onClick={this.goUrl}>
              <span>{this.props.data.sample_user}</span>
            </p>
          } />
        </Link>
    );
  }
}

export default Post;
