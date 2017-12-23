import {
    todoAPI
} from '../ApiConfig';

import request from 'utilities/Request';

import {
    FETCH_TODO,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE
} from 'constants/todo';

export function fetchTodo() {
    return {
        type: FETCH_TODO,
        payload: request(todoAPI)
    }
}
export function fetchTodoSuccess(response) {
    return {
        type: FETCH_TODO_SUCCESS,
        payload: response.payload.data
    }
}
export function fetchTodoFailure(error) {
    return {
        type: FETCH_TODO_FAILURE,
        payload: new Error(error),
        error: true
    }
}

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: request(todoAPI, 'post', {
            'TodoItem': todo
        })
    }
}
export function addTodoSuccess(todoItem, response) {
    return {
        type: ADD_TODO_SUCCESS,
        payload: todoItem
    }
}
export function addTodoFailure(error) {
    return {
        type: ADD_TODO_FAILURE,
        payload: new Error(error),
        error: true
    }
}