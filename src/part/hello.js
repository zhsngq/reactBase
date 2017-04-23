import React, { Component } from 'react';

class Hello extends Component {

    state = {
        liked: true,
    };

    handleClick = (event) => {
        this.setState({liked: !this.state.liked});
    };

    static defaultProps = {
        name:'world'
    }

    render() {

        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <h1 onClick={this.handleClick}> hello {this.props.name} {text}</h1>
        );
    }
}

export default Hello;
