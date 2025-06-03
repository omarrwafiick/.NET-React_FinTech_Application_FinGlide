

using System.ComponentModel.DataAnnotations;

namespace finglide_api.Dtos
{
    public record GetStockBaseDto(string Symbol, string CompanyName, decimal Amount, decimal LastDivided, string Industry, long MarketCapital);
    public record GetStockDto(int Id, string Symbol, string CompanyName, decimal Amount, decimal LastDivided, string Industry, long MarketCapital, List<GetCommentDto> Comments);
    public record CreateStockDto([Required][Length(1, 10)] string Symbol, [Required][Length(3, 20)] string CompanyName, [Required][Range(1, 1_000_000_000)] decimal Amount, [Required][Range(0.001, 100)] decimal LastDivided, [Required][Length(3, 20)] string Industry, [Required][Range(1, 5_000_000_000)] long MarketCapital);
    public record UpdateStockDto([Required][Range(1, 1_000_000_000)] decimal Amount, [Required][Range(0.001, 100)] decimal LastDivided, [Required][Range(1, 5_000_000_000)] long MarketCapital);
     
    public class FMPStock
    {
        public string symbol { get; set; }
        public double price { get; set; }
        public long marketCap { get; set; }
        public double beta { get; set; }
        public double lastDividend { get; set; }
        public string range { get; set; }
        public double change { get; set; }
        public double changePercentage { get; set; }
        public int volume { get; set; }
        public int averageVolume { get; set; }
        public string companyName { get; set; }
        public string currency { get; set; }
        public string cik { get; set; }
        public string isin { get; set; }
        public string cusip { get; set; }
        public string exchangeFullName { get; set; }
        public string exchange { get; set; }
        public string industry { get; set; }
        public string website { get; set; }
        public string description { get; set; }
        public string ceo { get; set; }
        public string sector { get; set; }
        public string country { get; set; }
        public string fullTimeEmployees { get; set; }
        public string phone { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
        public string image { get; set; }
        public string ipoDate { get; set; }
        public bool defaultImage { get; set; }
        public bool isEtf { get; set; }
        public bool isActivelyTrading { get; set; }
        public bool isAdr { get; set; }
        public bool isFund { get; set; }
    } 
};
