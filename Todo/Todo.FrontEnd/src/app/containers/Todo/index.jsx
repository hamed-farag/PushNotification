import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import FormControl from 'react-bootstrap/lib/FormControl';

import styles from './styles.scss';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className="TodoAppContainer">
                <div className="TodoAppContainer__List">
                    <div className="TodoAppContainer__List__Header">
                        <h3>Todo List</h3>
                    </div>
                    <div className="TodoAppContainer__List__Body">
                        <ListGroup>
                            <ListGroupItem>Item 1</ListGroupItem>
                            <ListGroupItem>Item 2</ListGroupItem>
                        </ListGroup>
                    </div>
                </div>
                <div className="TodoAppContainer__Form">
                    <div className="TodoAppContainer__Form__Input">
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter text"
                            onChange={this.handleChange} />
                    </div>
                    <div className="TodoAppContainer__Form__Button pull-right">
                        <Button bsStyle="primary" bsSize="small">Add</Button>
                    </div>
                </div>
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
