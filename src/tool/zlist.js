import React, { Component } from 'react';
import axios from 'axios';
import Tools from './Tools';
import CircularProgress from 'material-ui/CircularProgress';

class Zlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [] ,
      loading : true
    };
    this.ajaxData();
  }

  getLoadIng=(isload)=>{
    return isload?'none':'block'
  }

  refresh =()=>{
    new Tools().setData({
      this : this
    },(obj)=>{
      obj.data.data=[];
      obj.data.loading = true;
    });
    this.ajaxData();
  }

  ajaxData = ()=>{
    axios.get(this.props.url)
      .then(res => {
        if (res.status === 200) {
          new Tools().setData({
            this : this,
            res  : res
          },(obj)=>{
            for(var i in obj.res.data){
              if (obj.res.data[i])
                obj.data.data.push(obj.res.data[i]);
            }
            obj.data.loading = false;
          });
        }
      });
  }

  iscroll = () => {
    if(this.refs.list.scrollHeight - this.refs.list.clientHeight === this.refs.list.scrollTop){
      // this.ajaxData();
    }
  }

  render() {
    var _this =this;
    return (
      <div>
        <div style={{'display':this.getLoadIng(this.state.loading)}}> <div className='contentList' ref="list" onScroll={this.iscroll}> {
          this.state.data.map((data) => {
            return React.Children.map(this.props.children, function (child) {
              return React.cloneElement(child, { key:data.id, data:data,refresh:_this.refresh })
            });
          })
        } </div></div>
        <div style={{'display':this.getLoadIng(!this.state.loading),'text-align': 'center'}}> <CircularProgress /> </div>
      </div>
    );
  }
}

export default Zlist;
