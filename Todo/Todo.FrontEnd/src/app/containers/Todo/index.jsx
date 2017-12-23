import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './styles.scss';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
