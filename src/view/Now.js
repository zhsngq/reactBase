import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import {cyan800} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue300, indigo900} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Snackbar from 'material-ui/Snackbar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

import ListTool from './../tool/ListTool';
import Tools from './../tool/Tools';

import Api from './../site/api';
import axios from 'axios';

const styles = {
  chip: { margin: 4, },
  title: { cursor: 'pointer', },
  toggle: { marginBottom: 16},
  wrapper: { display: 'flex', flexWrap: 'wrap', },
  hhh:{},
  toggletop:{'margin-top': '10px'},
  text : {"text-align": 'center'}
};

const muiTheme = getMuiTheme({
  palette: { textColor: cyan800, },
  appBar: { height: 50, },
});

class Now extends Component {

  constructor(props) {
    super(props);
    this.state = {
      body :{
        title:'...',
        sample_user:'...',
      },
      hostory :[
      ],
      now : {
        th:{resDate:1000,dataTime:0,res:0},
        ti:{resDate:1000,dataTime:0,res:0},
        tht:{resDate:1000,dataTime:0,res:0},
      },
      is:0,
      error: false,
      avg_is: 0,
      loading : true
    };
    this.ajaxData();
  }

  refresh = ()=>{
    new Tools().setData({
      this : this
    },(obj)=>{
      obj.data.hostory=[];
      obj.data.loading = true;
    });
    this.ajaxData();
  }

  getLoadIng=(isload)=>{
    return isload?'none':'block'
  }

  handleRequestClose =()=>{
    var data = this.state;
    data.error=false;
    this.setState(data);
  }

  componentDidMount=()=>{
    this.interval = setInterval(() => this.refect(), 200);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  refect=()=>{
    var data = this.state;
    for (var i in data.now){
      if (data.now[i].dataTime !== 0 && data.now[i].res<=301) {
        data.now[i].res = data.now[i].resDate + (new Date() - new Date(data.now[i].dataTime));
        data.now[i].res = data.now[i].res/1000;
      }
    }
    data.is = (301-data.now.th.res)/300*5;
    data.is += (301-data.now.ti.res)/300*7;
    data.is += (301-data.now.tht.res)/300*9;
    data.is = parseInt(data.is);
    this.setState(data);
  }

  ajaxData=()=>{
    var get_data = {
      id:this.props.params.id
    }
    axios.get(new Api().getExperimentNow(),{params:get_data}).then(res => {
      var data     = this.state;
      data.body    = res.data[0];
      data.hostory = res.data[1];
      data.avg_is  = res.data[2];
      data.loading = false;
      this.setState(data);
    });
  }

  handleTouchTap=(e,x)=>{
    var data = this.state;
    if (data.now[e.target.id].dataTime === 0) {
      data.now[e.target.id].dataTime = new Date();
    } else {
      data.now[e.target.id].resDate += new Date() - new Date(data.now[e.target.id].dataTime);
      data.now[e.target.id].dataTime = 0;
    }
    this.setState(data);
  }

  getAvgNum = (sum)=>{
    if (sum<1 && sum>= 0) return '(无)'
    if (sum<5 && sum>= 1) return '(轻微)'
    if (sum<9 && sum>= 5) return '(中等)'
    if (sum<=21 && sum>= 9) return '(强烈)'
  }

  saveData = (event)=>{
    if (
      this.state.now.th.res==0||
      this.state.now.ti.res==0||
      this.state.now.tht.res==0
    ) {
      var data = this.state;
      data.error=true;
      this.setState(data);
      return ;
    }
    if (
      this.state.now.th.dataTime!=0||
      this.state.now.ti.dataTime!=0||
      this.state.now.tht.dataTime!=0
    ) {
      var data = this.state;
      data.error=true;
      this.setState(data);
      return ;
    }

    var postdata = {
        'ex_id' : this.props.params.id,
        'th'    : this.state.now.th.res,
        'ti'    : this.state.now.ti.res,
        'tht'   : this.state.now.tht.res,
        'is'    : this.state.is
    };
    var data = this.state;
    data.loading=true;
    this.setState(data);
    axios.get(new Api().getRestfulNew() ,{params:postdata}).then(res => {
      window.location.hash = '/posts';
    });
  }

  go =()=>{
    window.location.hash = '/posts';
  }

  render() {
    return (
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
            <div>
              <AppBar
                title={<span style={styles.title}>[{this.state.body.title?this.state.body.title:'...'}]正在进行...</span>}
                iconElementLeft={<IconButton onClick={this.go}><NavigationClose /></IconButton>} />
              <div style={{margin : '0px 10px 10px 10px'}}>
                <div> <div style={{'display':this.getLoadIng(this.state.loading)}}>
                  <Card>
                    <CardHeader
                      title={this.state.body.title+":"+this.state.body.sample_user}
                      subtitle={this.state.body.sample_date}
                      actAsExpander={true}
                    />
                    <CardText expandable={false}>
                      样品稀释:{this.state.body.dilution}%&nbsp;&nbsp;&nbsp;
                      溶剂 : {this.state.body.medicament} &nbsp;&nbsp;&nbsp;
                      平均值IS : {this.state.avg_is} &nbsp;&nbsp;&nbsp;
                      刺激性 : {this.getAvgNum(this.state.avg_is)} &nbsp;&nbsp;&nbsp;
                    </CardText>
                  </Card>
                  <div style={styles.toggletop}>
                    <Toggle id='th' label={"t(H) "+this.state.now.th.res+"s"}
                      defaultToggled={this.state.now.th.dataTime!=0}
                      onToggle = {this.handleTouchTap}
                      labelStyle = {styles.text}
                      labelPosition="right" style={styles.toggle} />
                    <Toggle id='ti' label={"t(L) "+this.state.now.ti.res+"s"}
                      defaultToggled={this.state.now.ti.dataTime!=0}
                      onToggle = {this.handleTouchTap}
                      labelStyle = {styles.text}
                      labelPosition="right" style={styles.toggle} />
                    <Toggle id='tht' label={"t(C) "+this.state.now.tht.res+"s"}
                      defaultToggled={this.state.now.tht.dataTime!=0}
                      onToggle = {this.handleTouchTap}
                      labelStyle = {styles.text}
                      labelPosition="right" style={styles.toggle} />
                  </div>
                  <RaisedButton
                    label={'保存IS:'+this.state.is + this.getAvgNum(this.state.is)}
                    onTouchTap={this.saveData}
                    fullWidth={true} />
                  <List> {
                      this.state.hostory.map((data) => {
                        var _this = this;
                        return <div>
                        <ListItem
                          primaryText={
                            <p>
                            {data.time} &nbsp;&nbsp;&nbsp;
                            IS:<strong>{data.is+_this.getAvgNum(data.is)}</strong>
                            </p>
                          }
                          secondaryText={
                            <p>
                              t(H):
                              <strong>{data.th} </strong> , &nbsp;&nbsp;&nbsp;
                              t(L):<strong>{data.ti}</strong>, &nbsp;&nbsp;&nbsp;
                              t(C):<strong>{data.tht}</strong> &nbsp;&nbsp;&nbsp;
                            </p>
                        } />
                        <Divider />
                        <ListTool data_id={data.id} url={new Api().getRestfulDel()} refresh={_this.refresh} />
                        </div>
                      })
                  }</List>
                </div></div>
                <div style={{'display':this.getLoadIng(!this.state.loading),'text-align': 'center'}}> <CircularProgress /> </div>
                <Snackbar
                  open={this.state.error}
                  message="t(H)\t(L)\t(C)三个选项必须都有值,且在停止状态!"
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose}
                />
              </div>
            </div>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default Now;
