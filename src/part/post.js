import React, { Component } from 'react';

/**
 * 帖子测试列表的组件
 */
class Post extends Component {

  render() {
    return (
      <div className="textCenter">
        <span className="pure-u-1-6" > {this.props.data.id} </span>
        <span className="pure-u-1-6" > {this.props.data.name} </span>
      </div>
      );
  }
}

export default Post;
