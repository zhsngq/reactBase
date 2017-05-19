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
              <Tab label="Tab A" value="/"> </Tab>
              <Tab label="Tab B" value="/posts"> </Tab>
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
