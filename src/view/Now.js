import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {cyan800} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue300, indigo900} from 'material-ui/styles/colors';

import Api from './../site/api';
import axios from 'axios';

const styles = {
  chip: { margin: 4, },
  wrapper: { display: 'flex', flexWrap: 'wrap', },
};

const stylet = {
  title: {
    cursor: 'pointer',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan800,
  },
  appBar: {
    height: 50,
  },
});

class Now extends Component {

  constructor(props) {
    super(props);
    this.state = {
      body :{
      },
      hostory :[
      ],
      now : {
        th:false,
        ti:false,
        tht:false,
      }
    };
    this.ajaxData();
  }

  ajaxData=()=>{
    console.log('sad');
    var get_data = {
      id:this.props.params.id
    }
    axios.get(new Api().getExperimentNow(),{params:get_data}).then(res => {
      var data = this.state;
      data.body = res[0];
      data.hostory = res[1];
    });
  }

  handleTouchTap=(e)=>{
    console.log(e.target.id);
  }

  render() {
    return (
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
            <div>
              <AppBar
                title={<span style={styles.title}>Title</span>}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>} />
              <Chip id='th' backgroundColor={blue300} onTouchTap={this.handleTouchTap} style={styles.chip}>
                Text Avatar Chip
              </Chip>
            </div>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default Now;
