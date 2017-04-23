import React, { Component } from 'react';
import Hello from './part/hello';
import List from './part/list';

class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <List />
            </div>
        );
    }
}

export default App;


