import React, { Component } from 'react';
import Post from './post';
import axios from 'axios';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
    axios.get(this.props.url)
      .then(res => {
        if (res.status === 200)
          this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className={this.props.type} onClick={this.handleClick}> {
        this.state.data.map((data) => {
          var children = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
              key:data.id,
              data:data
            })
          });
          return children;
        })
      } </div>
    );
  }
}

export default List;
