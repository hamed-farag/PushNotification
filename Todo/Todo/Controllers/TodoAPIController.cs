using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

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
        public void Post([FromBody]string value)
        {
            Database.Todo.AddTodo(value);
        }
    }
}