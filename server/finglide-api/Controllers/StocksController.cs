using finglide_api.Contracts;
using finglide_api.Mappers;
using finglide_api.models;
using Microsoft.AspNetCore.Mvc; 

namespace finglide_api.Controllers
{
    [Route("api/stocks")]
    [ApiController]
    public class StocksController : Controller
    { 
        private readonly IMainRepository<Stock> _reppsitory;
        public StocksController(IMainRepository<Stock> reppsitory)
        { 
            _reppsitory = reppsitory;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _reppsitory.Get(x=>x.Comments);
            return result.Count > 0 ? Ok(result.Select(x => x.FromStockToDto())) : NotFound("Nothing was found");
        }
        
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var result = await _reppsitory.Get(id, x=>x.Comments);
            return result is not null ? Ok(result.FromStockToDto()) : NotFound("Nothing was found");
        }
    }
}