using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace finglide_api.models
{
    public class Stock : BaseEntity
    {
        private Stock(string symbol, string companyName, decimal amount, decimal lastDivided, string industry, long marketCapital)
        {
            Symbol = symbol;
            CompanyName = companyName;
            Amount = amount;
            LastDivided = lastDivided;
            Industry = industry;
            MarketCapital = marketCapital;
        }
        public string Symbol { get; private set; } = string.Empty;
        public string CompanyName { get; private set; } = string.Empty;
        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; private set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal LastDivided { get; private set; }
        public string Industry { get; private set; } = string.Empty;
        public long MarketCapital { get; private set; }
        public List<Comment> Comments { get; private set; } = new();
        public static Stock CreateFactory(string symbol, string companyName, decimal amount, decimal lastDivided, string industry, long marketCapital) => new Stock(symbol, companyName, amount, lastDivided, industry, marketCapital);
        public static Stock Update(Stock stock,decimal amount, decimal lastDivided, long marketCapital)
        {
            stock.Amount = amount;
            stock.LastDivided = lastDivided;
            stock.MarketCapital = marketCapital;
            return stock;
        }
    }
}