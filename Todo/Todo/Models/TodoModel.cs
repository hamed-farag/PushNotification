﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Todo.Models
{
    public class TodoModel
    {
        [Required]
        public string TodoItem { get; set; }
    }
}