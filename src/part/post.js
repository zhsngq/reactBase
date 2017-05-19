import React, { Component } from 'react';
import { Layout,Tag } from 'element-react';

/**
 * 帖子测试列表的组件
 */
class Post extends Component {

  render() {
    return (
      <div>
        <Layout.Row>
          <Layout.Col span="24"><div className="grid-content">
            <Layout.Col span="12"><div className="grid-content">
              <Tag type="gray">{this.props.data.id}</Tag>
            </div></Layout.Col>
            <Layout.Col span="12"><div className="grid-content">
              {this.props.data.name}
            </div></Layout.Col>
          </div></Layout.Col>
        </Layout.Row>
      </div>
      );
  }
}

export default Post;
