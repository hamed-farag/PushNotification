import {
    todoAPI
} from '../ApiConfig';

import request from 'utilities/Request';

import {
    FETCH_TODO,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE
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