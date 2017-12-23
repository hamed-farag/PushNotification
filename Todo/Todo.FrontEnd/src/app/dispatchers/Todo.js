import {
    fetchTodo,
    fetchTodoSuccess,
    fetchTodoFailure,
    addTodo,
    addTodoSuccess,
    addTodoFailure,
} from 'actions/todo';

export function fetchTodoDispatcher(dispatch) {
    return () => {
        dispatch(fetchTodo())
            .then(function (response) {
                dispatch(fetchTodoSuccess(response))
            })
            .catch(function (error) {
                dispatch(fetchTodoFailure(error))
            });
    }
}

export function addTodoDispatcher(dispatch) {
    return (todoItem) => {
        dispatch(addTodo(todoItem))
            .then(function (response) {
                dispatch(addTodoSuccess(todoItem, response))
            })
            .catch(function (error) {
                dispatch(addTodoFailure(error))
            });
    }
}