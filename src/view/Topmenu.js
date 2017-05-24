import React, { Component } from 'react';
import {cyan800} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan800,
  },
  appBar: {
    height: 50,
  },
});

class Topmenu extends Component {

  handleChange=(value)=>{
    window.location.hash = value;
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
          <div>
            <Tabs value={window.location.hash.replace('#','')} onChange={this.handleChange} >
              <Tab label="首页" value="/"> </Tab>
              <Tab label="实验室" value="/posts"> </Tab>
              <Tab label="NEW实验" value="/experiment"> </Tab>
            </Tabs>
            <div style={{margin : '0px 10px 10px 10px'}}>
              {this.props.children || 'Welcome to ZHSNGQ'}
            </div>
          </div>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default Topmenu;
