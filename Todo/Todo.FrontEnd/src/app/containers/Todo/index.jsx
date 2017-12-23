import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import FormControl from 'react-bootstrap/lib/FormControl';

import { fetchTodoDispatcher, addTodoDispatcher } from 'dispatchers/Todo';

import styles from './styles.scss';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.props.fetchTodo();
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleClick() {
        if (this.state.value.trim() !== '') {
            this.props.addTodo(this.state.value);
        }
    }

    renderTodoList(data) {
        return data.map((todoItem, index) => {
            return (<ListGroupItem key={index}>{todoItem}</ListGroupItem>)
        });
    }

    render() {
        const { todo: { data, loading } } = this.props;
        return (
            <div className="TodoAppContainer">
                <div className="TodoAppContainer__List">
                    <div className="TodoAppContainer__List__Header">
                        <h3>Todo List</h3>
                    </div>
                    <div className="TodoAppContainer__List__Body">
                        {
                            !loading ?
                                <ListGroup>
                                    {this.renderTodoList(data)}
                                </ListGroup>
                                : <span>Loading</span>
                        }
                    </div>
                </div>
                <div className="TodoAppContainer__Form">
                    <div className="TodoAppContainer__Form__Input">
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter text"
                            onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="TodoAppContainer__Form__Button pull-right">
                        <Button bsStyle="primary" bsSize="small" onClick={this.handleClick.bind(this)}>Add</Button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTodo: fetchTodoDispatcher(dispatch),
        addTodo: addTodoDispatcher(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
