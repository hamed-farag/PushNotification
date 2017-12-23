import {
    FETCH_TODO,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE
} from 'constants/todo';

import {
    ADD_TODO_SIGNALR
} from 'constants/signalr';

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TODO:
            return {
                ...state,
                loading: true
            }

        case FETCH_TODO_SUCCESS:
            var todoList = action.payload;
            return {
                ...state,
                data: todoList,
                loading: false
            }

        case FETCH_TODO_FAILURE:
            var error = action.payload;
            return {
                ...state,
                error,
                loading: false
            }

        case ADD_TODO_SUCCESS:
        case ADD_TODO_SIGNALR:
            var todo = action.payload;
            var tempTodoList = state.data.slice(0);
            tempTodoList.push(todo);
            return {
                ...state,
                data: tempTodoList,
                loading: false
            }

        case ADD_TODO_FAILURE:
            var error = action.payload;
            return {
                ...state,
                error,
                loading: false
            }

        default:
            return state;
    }
}