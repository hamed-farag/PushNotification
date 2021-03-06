import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import signalR from 'helpers/SignalR';

import styles from './styles.scss';

class App extends Component {
    constructor(props) {
        super(props);

        // Initialize SignalR Server
        signalR();
    }

    render() {
        return (
            <div className="TodoContainer">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
