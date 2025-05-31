using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace finglide_api.models
{
    public class Stock : BaseEntity
    {
        public string Symbol { get; set; } = string.Empty;
        public string CompanyName { get; set; } = string.Empty;
        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal LastDivided { get; set; }
        public string Industry { get; set; } = string.Empty;
        public long MarketCapital { get; set; }
        public List<Comment> Comments { get; set; } = new();
    }
}