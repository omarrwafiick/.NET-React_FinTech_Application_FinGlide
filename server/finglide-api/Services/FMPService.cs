using Newtonsoft.Json;

namespace finglide_api.Services
{
    public class FMPService : IFMPService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _config;
        public FMPService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }
        public async Task<Stock?> FindStockBySymbolAsync(string Symbol)
        {
            try
            {
                var result = await _httpClient.GetAsync($"https://financialmodelingprep.com/stable/profile?symbol={Symbol}&apikey={_config["APIKeys:FMPKEY"]}");
                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var tasks = JsonConvert.DeserializeObject<FMPStock[]>(content);
                    Console.WriteLine("API Response: " + content);
                    if (tasks != null && tasks.Length > 0)
                    {
                        var stock = tasks[0];
                        return stock.FromFMPStockToStock();
                    }
                    else
                    {
                        Console.WriteLine($"No stock data found for symbol: {Symbol}");
                        return null;
                    } 
                }
                Console.WriteLine("Network failure");
                return null;
            }
            catch (System.Exception)
            {
                Console.WriteLine("Network failure");
                throw;
            }
        }
    }
}