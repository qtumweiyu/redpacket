import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: 'Danilo'
    };
    componentWillMount() {
        console.log('3');
    }
    componentDidMount() {
        this.setState({ name: 'Ethan Shan' })
    }
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        );
    }
}
