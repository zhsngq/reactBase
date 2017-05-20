import React, { Component } from 'react';
import axios from 'axios';

class Zlist extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.ajaxData();
  }

  ajaxData = ()=>{
    axios.get(this.props.url)
      .then(res => {
        if (res.status === 200) {
          var befordata = this.state.data;
          for(var i in res.data){
            if (res.data[i]) 
              befordata.push(res.data[i]);
          }
          this.setState({ data: befordata });
        }
      });
  }

  iscroll = () => {
    if(this.refs.list.scrollHeight - this.refs.list.clientHeight === this.refs.list.scrollTop){
      this.ajaxData();
    }
  }

  render() {
    return (
      <div className='contentList' ref="list" onScroll={this.iscroll}> {
        this.state.data.map((data) => {
          return React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, { key:data.id, data:data })
          });
        })
      } </div>
    );
  }
}

export default Zlist;
