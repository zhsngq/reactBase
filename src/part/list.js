import React, { Component } from 'react';

class List extends Component {

    state = {
        data:[
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

    handleClick = (event) => {
        this.setState({data: []});
    };

    render() {
        var listItems = this.state.data.map((user) =>
            <p key={user.id.toString()}>{user.name}</p>
        );
        return (
            <div>{listItems}</div>
        );
    }
}

export default List;
