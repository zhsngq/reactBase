import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

class Topmenu extends Component {

  handleChange = (value)=>{
    window.location.hash = value;
  }
  
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div>
            <Tabs value={window.location.hash.replace('#','')} onChange={this.handleChange} >
              <Tab label="首页" value="/"> </Tab>
              <Tab label="帖子" value="/posts"> </Tab>
              <Tab label="个人中心" value="/member"> </Tab>
            </Tabs>
            <div>
              {this.props.children || 'Welcome to ZHSNGQ'}
            </div>
          </div>
        </MuiThemeProvider>
        
      </div>
    );
  }
}

export default Topmenu;
