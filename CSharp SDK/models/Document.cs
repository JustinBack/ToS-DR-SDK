using System;
using System.Collections.Generic;
using System.Text;

namespace tosdr.models
{

    public class Document
    {
        public int? id { get; set; }
        public string? name { get; set; }
        public string? url { get; set; }
        public string? xpath { get; set; }
        public string? text { get; set; }
        public string? created_at { get; set; }
        public string? updated_at { get; set; }
        public int? service_id { get; set; }
        public bool? reviewed { get; set; }
        public object? user_id { get; set; }
        public object? status { get; set; }
    }
}
