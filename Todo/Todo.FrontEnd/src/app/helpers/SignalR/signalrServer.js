export default function (proxy) {
    // Call Server Methods via {actions} to fire an updates to all clients via Signalr Server

    const AddNewTodo = function (todo) {
        proxy.invoke('AddTodo', todo);
    }

    return {
        AddNewTodo: AddNewTodo
    }
}