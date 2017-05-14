import React, { Component } from 'react';
import { Link } from 'react-router';

class Topmenu extends Component {

  render() {
    return (
      <div>
        <span className="pure-u-1-3" > 
          <Link to="/">index</Link>
        </span>
        <span className="pure-u-1-3" > 
          <Link to="/posts">postList</Link>
        </span>
        <span className="pure-u-1-3" > 
          <Link to="/posts">about</Link>
        </span>
        {this.props.children || 'Welcome to ZHSNGQ'}
      </div>
    );
  }
}

export default Topmenu;
