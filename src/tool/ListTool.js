import React, { Component } from 'react';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


import axios from 'axios';

class ListTool extends Component {

  constructor(props) {
    super(props);
  }

  del=(e,v)=>{
    var get_data = {
      id:this.props.data_id
    }
    var _this = this;
    axios.get(_this.props.url ,{params:get_data}).then(res => {
        _this.props.refresh();
    });
  }

  render() {
    return (
        <div style={{position: 'absolute', zIndex: 10, right: '0.1em', marginTop: '-4.4em'}}>
            <IconMenu iconButtonElement={<IconButton
                touch={true}
                onChange={this.del}
                tooltip="操作"
                tooltipPosition="bottom-left" > <MoreVertIcon color={grey400} /> </IconButton>}>
                <MenuItem value='del' onTouchTap={this.del}>删除</MenuItem>
            </IconMenu>
        </div>
    );
  }
}

export default ListTool;
