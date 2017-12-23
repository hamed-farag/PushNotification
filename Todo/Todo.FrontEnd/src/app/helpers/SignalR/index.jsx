import { serverUrl } from '../../config';

import signalrClient from './signalrClient';
import signalrServer from './signalrServer';

// http://www.c-sharpcorner.com/article/creating-manual-javascript-signalr-client/
// https://github.com/SignalR/SignalR/wiki/SignalR-JS-Client
// https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/tutorial-getting-started-with-signalr-and-mvc
// https://www.codeproject.com/Articles/806919/SignalR-with-ASP-NET-MVC

// Initialize SignalR Connection
export default function () {

    //We are going to write our own code to create the proxy.
    let todoUrl = serverUrl + "signalr";

    let signalrConnection = $.hubConnection(todoUrl, {
        useDefaultPath: false
    });

    let todoProxy = signalrConnection.createHubProxy('TodoHub');
    signalrConnection.logging = true;

    signalrClient(todoProxy);

    signalrConnection.start()
        .done(() => {
            console.log('Now connected to signalR, connection ID = ' + signalrConnection.id);

            // To Invoke Server Side SignalR methods
            /*
            var server = signalrServer(todoProxy);
            setTimeout(function () {
                server.AddNewTodo('Hellllo From SignalR');
            }, 5000);
            */
        })
        .fail((error) => {
            console.log('Could not connect to signalR, Error: ', error);
        });

    signalrConnection.stateChanged(function (change) {
        if (change.newState === $.signalR.connectionState.reconnecting) {
            console.log('Re-connecting');
        }
        else if (change.newState === $.signalR.connectionState.connected) {
            console.log('The server is online');
        }
    });

};