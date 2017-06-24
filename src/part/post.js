import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { darkBlack } from 'material-ui/styles/colors';
import {Link} from 'react-router';
import Badge from 'material-ui/Badge';
import Divider from 'material-ui/Divider';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import ListTool from './../tool/ListTool';
import Api from './../site/api';

const styles = {
  sum: {position: 'absolute', display: 'block', padding: 0, top: 16, right: '2em'},
  fr: { position: 'absolute', right: '2em'},
};
/**
 * 帖子测试列表的组件
 */
class Post extends Component {

  constructor(props) {
    super(props);
  }

  goUrl = (e,key)=>{
    console.log(e.target.firstChild);
  }

  render() {
    return (
      <div>
        <Link to={'/now/'+this.props.data.id}>
          <ListItem  style={{color:darkBlack}}
            id={this.props.data.id}
            primaryText={this.props.data.title}
            secondaryText={
              <div onClick={this.goUrl}>
                <span>{this.props.data.sample_user}</span>
                <span style={styles.fr}>{this.props.data.sample_date}</span>
                <Badge badgeContent={this.props.data.time?
                  this.props.data.sum:'0'
                } secondary={true} style={styles.sum} />
              </div>
          } />
          <Divider />
        </Link>
        <ListTool data_id={this.props.data.id} url={new Api().getExperimentDel()} refresh={this.props.refresh} />
      </div>
    );
  }
}

export default Post;
