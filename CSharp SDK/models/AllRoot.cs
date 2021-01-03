using System;
using System.Collections.Generic;
using System.Text;

namespace tosdr.models
{
    public class AllRoot
    {
        public bool error { get; set; }
        public string message { get; set; }
        public Parameters parameters { get; set; }


        public class Parameters
        {
            public int? version { get; set; }
            public List<Service> services { get; set; }
        }
    }
}
