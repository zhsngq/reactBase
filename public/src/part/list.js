import React, { Component } from 'react';
import Avatar from './avatar';
import axios from 'axios';

class List extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id:1,
          name:'zhsngq',
          passworld:'w3cshool'
        },{
          id:2,
          name:'zhsngq1',
          passworld:'w3cshool1'
        }
      ]
    };
  }


  handleClick = (event) => {
    this.setState({data: []});
  };

  render() {
    return (
      <div onClick={this.handleClick}> {
        this.state.data.map((data) =>
          <Avatar  key={data.id} data={data} />
        )
      } </div>
    );
  }
}

export default List;
