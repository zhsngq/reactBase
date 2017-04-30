import React, { Component } from 'react';

class Avatar extends Component {

    render() {
        return (
            <div className="textCenter">
                <span className="pure-u-1-3" > {this.props.data.id} </span>
                <span className="pure-u-1-3" > {this.props.data.name} </span>
                <span className="pure-u-1-3"> {this.props.data.passworld} </span>
            </div>
        );
    }
}

export default Avatar;
