using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Todo.Models;

namespace Todo.Controllers
{
    public class TodoAPIController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return Database.Todo.GetTodo();
        }

        // POST api/values
        public string Post([FromBody]TodoModels todoItem)
        {
            Database.Todo.AddTodo(todoItem.TodoItem);
            return todoItem.TodoItem;
        }
    }
}