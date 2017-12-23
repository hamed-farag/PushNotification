using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Todo.Models;

namespace Todo.Controllers
{
    public class TodoController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult TodoBackend()
        {
            return View();
        }

        [HttpPost]
        public ActionResult TodoBackend(TodoModels todo)
        {
            if (todo.TodoItem != null && !string.IsNullOrEmpty(todo.TodoItem.Trim()))
            {
                Database.Todo.AddTodo(todo.TodoItem);
            }
            return View(todo);
        }
    }
}