using System;
using System.Collections.Generic;
using System.Text;

namespace tosdr.models
{

    public class Case
    {
        public int? id { get; set; }
        public string? classification { get; set; }
        public int? score { get; set; }
        public string? title { get; set; }
        public string? description { get; set; }
        public int? topic_id { get; set; }
        public string? created_at { get; set; }
        public string? updated_at { get; set; }
        public bool? privacy_related { get; set; }
    }
}
