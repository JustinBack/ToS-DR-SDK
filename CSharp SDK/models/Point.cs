using System;
using System.Collections.Generic;
using System.Text;

namespace tosdr.models
{

    public class Point
    {
        public string? discussion { get; set; }
        public int? id { get; set; }
        public bool? needsModeration { get; set; }
        public Document? document { get; set; }
        public string? quote { get; set; }
        public List<string>? services { get; set; }
        public string? set { get; set; }
        public object? slug { get; set; }
        public string? title { get; set; }
        public List<object>? topics { get; set; }
        public Case? @case { get; set; }
    }
}
