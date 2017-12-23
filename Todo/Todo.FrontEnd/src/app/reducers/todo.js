import {
    FETCH_TODO,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE
} from 'constants/todo';

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TODO:
            return { ...state,
                loading: true
            }

        case FETCH_TODO_SUCCESS:
            var todoList = action.payload;
            return { ...state,
                data: todoList,
                loading: false
            }

        case FETCH_TODO_FAILURE:
            var error = action.payload;
            return { ...state,
                error,
                loading: false
            }

        default:
            return state;
    }
}