import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <MyAwesomeReactComponent />
        </MuiThemeProvider>
    );
  }
}

export default App;
