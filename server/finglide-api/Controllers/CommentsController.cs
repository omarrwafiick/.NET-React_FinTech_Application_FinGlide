
using finglide_api.Sanitizers;

namespace finglide_api.Controllers
{
    [Authorize]
    [Route("api/finglide/comments")]
    [ApiController]
    public class CommentsController : Controller
    {
        private readonly IMainRepository<Comment> _commentRepository;
        private readonly IMainRepository<Stock> _stockRepository;
        private readonly IFMPService _fmpService;
        private readonly UserManager<User> _userManager;
        public CommentsController(
            IMainRepository<Comment> commentRepository,
            IMainRepository<Stock> stockRepository,
            IFMPService fmpService,
            UserManager<User> userManager)
        {
            _commentRepository = commentRepository;
            _stockRepository = stockRepository;
            _fmpService = fmpService;
            _userManager = userManager;
        }

        [HttpGet("{symbol:alpha}/{isdescending:bool}")]
        public IActionResult GetByStockSymbol([FromRoute] string symbol,[FromRoute] bool isdescending)
        {  
            var result = _commentRepository.Get(s
                => s.Stock!.Symbol.ToLower() == Sanitizer.SanitizeText(symbol).ToLower(), i => i.User, i => i.Stock!);

            if (isdescending) result.OrderByDescending(c => c.CreatedAt);
            else result.OrderBy(c => c.CreatedAt);

            return result is not null ? Ok(result.Select(c => c.FromCommentToDtoDetails())) : NotFound("Nothing was found");
        }

        [HttpPost("{symbol:alpha}")]
        public async Task<IActionResult> Create([FromRoute] string symbol, [FromBody] CreateCommentDto dto)
        {
            var userExists = await _userManager.FindByEmailAsync(dto.Email);
            if (userExists is null)
                return NotFound("User was not found"); 

            var exists = _stockRepository.Get(s
                => s.Symbol.ToLower() == Sanitizer.SanitizeText(symbol).ToLower()).FirstOrDefault();
                
            if (exists is null)
            {
                var newStock = await _fmpService.FindStockBySymbolAsync(symbol);
                await _stockRepository.CreateAsync(newStock);
                exists = newStock;
            }

            dto = CommentSanitizers.SanitizeCreateCommentDto(dto);

            var result = await _commentRepository.CreateAsync(
                Comment.CreateFactory(
                    dto.Title,
                    dto.Content,
                    exists.Id,
                    userExists!.Id
                    )
                );

            return result > -1 ? Ok(new { id = result }) : BadRequest("Failed to create new comment");
        }

        [HttpPut("{commentid:int}")]
        public async Task<IActionResult> Update([FromRoute] int commentid, [FromBody] UpdateCommentDto dto)
        {
            var comment = await _commentRepository.GetAsync(commentid);
            if(comment is null)
                return NotFound("Nothing was found");

            dto = CommentSanitizers.SanitizeUpdateCommentDto(dto);
            
            var result = await _commentRepository.UpdateAsync(Comment.Update(comment, dto.Title, dto.Content));
            return result ? Ok("Comment was updated successfully") : BadRequest("Failed to update comment");
        }

        [HttpDelete("{commentid:int}")]
        public async Task<IActionResult> Delete([FromRoute] int commentid)
        { 
            var comment = await _commentRepository.GetAsync(commentid);
            if(comment is null)
                return NotFound("Nothing was found");
            var result = await _commentRepository.DeleteAsync(comment);
            return result ? NoContent() : BadRequest("Failed to delete comment");
        }
    }
}