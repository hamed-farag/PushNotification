import store from '../../store';
import {
    addTodoSR
} from 'actions/signalr';

export default function (proxy) {
    proxy.on('addTodoItemToList', function (todo) {
        store.dispatch(addTodoSR(todo));
    })
}