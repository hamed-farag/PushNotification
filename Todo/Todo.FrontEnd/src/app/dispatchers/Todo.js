import {
    fetchTodo,
    fetchTodoSuccess,
    fetchTodoFailure
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