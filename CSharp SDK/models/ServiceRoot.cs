using System;
using System.Collections.Generic;
using System.Text;

namespace tosdr.models
{
    public class ServiceRoot
    {
        public bool error { get; set; }
        public string message { get; set; }
        public Service parameters { get; set; }
    }
}
