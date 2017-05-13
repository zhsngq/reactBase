import React, { Component } from 'react';
import Avatar from './avatar';
import Post from './post';
import axios from 'axios';
import ReactListView from '../src';

class List extends Component {

  constructor(props){
    super(props);
    this.state = { data: [ ] };
    axios.get(this.props.url)
    .then(res => {
      if (res.status===200)
        this.setState({data: res.data});
    });
  }

  handleClick = (event) => {
    this.setState({data: []});
  };

  render() {
    return (
      <div className={this.props.type} onClick={this.handleClick}> {
        this.state.data.map((data) => {
          if (this.props.type === 'post') {
            return <Post key={data.id} data={data} />
          } else if (this.props.type === 'avatar') {
            return <Avatar key={data.id} data={data} />
          } else {
            return 'no data';
          }
        })
      } </div>
    );
  }
}

export default List;
