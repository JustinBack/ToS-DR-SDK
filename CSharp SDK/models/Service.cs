using System;
using System.Collections.Generic;
using System.Text;

namespace tosdr.models
{
    public class Service
    {
        public int id { get; set; }
        public string? name { get; set; }
        public string? url { get; set; }
        public string? created_at { get; set; }
        public string? updated_at { get; set; }
        public string? wikipedia { get; set; }
        public object? keywords { get; set; }
        public object? related { get; set; }
        public string? slug { get; set; }
        public bool? is_comprehensively_reviewed { get; set; }
        public object? user_id { get; set; }
        public string? rating { get; set; }
        public object? status { get; set; }
        public string? nice_service { get; set; }
        public bool? has_image { get; set; }
        public string? image { get; set; }
        public List<Document>? documents { get; set; }
        public List<Point>? points { get; set; }
        public List<string>? urls { get; set; }
    }
}
