import React, { Component } from 'react';
import { Layout,Tabs } from 'element-react';

import 'element-theme-default';

class Topmenu extends Component {

  render() {
    return (
      <div>
        <Layout.Row>
          <Layout.Col span="24"> <div className="grid-content bg-purple-dark">
            <Tabs activeName={window.location.hash.replace('#','')} onTabClick={(tab)=>{
                window.location.hash = tab.props.name;
              }}>
              <Tabs.Pane label="用户管理" name="/" ></Tabs.Pane>
              <Tabs.Pane label="配置管理" name="/posts"></Tabs.Pane>
            </Tabs>
          </div></Layout.Col>
        </Layout.Row>
        <Layout.Row>
          <Layout.Col span="24"> <div className="grid-content bg-purple-dark">
            {this.props.children || 'Welcome to ZHSNGQ'}
          </div></Layout.Col>
        </Layout.Row>
      </div>
    );
  }
}

export default Topmenu;
