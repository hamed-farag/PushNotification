using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace Todo.SignalR
{
    public class TodoHub : Hub
    {
        public void AddTodo(string todo)
        {
            // Call the addNewMessageToPage method to update clients.
            Clients.All.AddTodoItemToList(todo);
        }
    }
}