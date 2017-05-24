import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Api from './../site/api';
import axios from 'axios';

class Experiment extends Component {

  constructor(props) {
    super(props);
    this.state = {
        sample_date : new Date(),
        sample_user: '',
        title: '',
        dilution : '',
        medicament : '',
        is_sublimt: false
    };
  }

  getDefaultProps = () => {
    return {
      name : 'Runoob'
    }
  }

  saveData = (event)=>{
    console.log(this.state);
    var postdata = {
        'sample_date': this.state.sample_date,
        'sample_user': this.state.sample_user,
        'title':       this.state.title,
        'dilution':    this.state.dilution,
        'medicament':  this.state.medicament
    };
    for(var i in postdata){
      if (!postdata[i]) {
        var data = this.state;
        data.is_sublimt = true;
        this.setState(data);
        return ;
      }
    }
    axios.get(new Api().getExperimentNew(),{params:postdata}).then(res => {
      window.location.hash = '/posts';
    });
  };

  handleChange = (event)=>{
    var data = this.state;
    data[event.target.name] = event.target.value;
    this.setState(data);
  }

  handleDateChange = (event,value)=>{
    var data = this.state;
    data["sample_date"] = value;
    this.setState(data);
  }

  render() {
    return (
        <div>
            <DatePicker
              onChange ={this.handleDateChange}
              name='sample_date'
              defaultDate={this.state.sample_date}
              fullWidth={true}
              errorText={!this.state.is_sublimt?"":this.state.sample_date?"":"选项必填"}
              floatingLabelText="送样日期" />
            <TextField
              onChange={this.handleChange}
              name='sample_user'
              defaultValue={this.state.sample_user}
              fullWidth={true}
              errorText={!this.state.is_sublimt?"":this.state.sample_user?"":"选项必填"}
              floatingLabelText="送样人" /><br />
            <TextField
              name='title'
              onChange={this.handleChange}
              defaultValue={this.state.title}
              fullWidth={true}
              errorText={!this.state.is_sublimt?"":this.state.title?"":"选项必填"}
              floatingLabelText="名称/批号" /><br />
            <TextField
              name='dilution'
              onChange={this.handleChange}
              defaultValue={this.state.dilution}
              fullWidth={true}
              errorText={!this.state.is_sublimt?"":this.state.dilution?"":"选项必填"}
              floatingLabelText="稀释度" /><br />
            <TextField
              name='medicament'
              onChange={this.handleChange}
              defaultValue={this.state.medicament}
              fullWidth={true}
              errorText={!this.state.is_sublimt?"":this.state.medicament?"":"选项必填"}
              floatingLabelText="容剂" />
            <RaisedButton 
              label="新建实验" 
              onTouchTap={this.saveData}
              primary={true} 
              fullWidth={true} />
        </div>
    );
  }
}

export default Experiment;
