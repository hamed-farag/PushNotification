using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Todo.Database
{
    public static class Todo
    {
        private static List<string> todoList = new List<string>(new String[] {
                "Get Groceries", "Pay Electricity Bill"
            });

        public static void AddTodo(string todo)
        {
            todoList.Add(todo);
        }

        public static List<string> GetTodo()
        {
            return todoList;
        }
    }
}