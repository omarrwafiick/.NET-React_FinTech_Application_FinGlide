 
namespace finglide_api.Contracts
{
    public interface IFMPService
    {
        Task<Stock> FindStockBySymbolAsync(string Symbol);
    }
}