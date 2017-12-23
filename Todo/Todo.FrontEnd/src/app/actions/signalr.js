import {
    ADD_TODO_SIGNALR
} from 'constants/signalr';

export function addTodoSR(todo) {
    return {
        type: ADD_TODO_SIGNALR,
        payload: todo
    }
}