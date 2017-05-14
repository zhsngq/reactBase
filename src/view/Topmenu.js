import React, { Component } from 'react';

class Topmenu extends Component {

  render() {
    return (
      <div>
        <span className="pure-u-1-3" > index </span>
        <span className="pure-u-1-3" > postList </span>
        <span className="pure-u-1-3" > about </span>
        {this.props.children}
      </div>
    );
  }
}

export default Topmenu;
