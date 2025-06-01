using finglide_api.Contracts;
using finglide_api.Dtos;
using finglide_api.Mappers;
using finglide_api.models;
using Microsoft.AspNetCore.Mvc; 

namespace finglide_api.Controllers
{
    [Route("api/finglide/comments")]
    [ApiController]
    public class CommentsController : Controller
    {
        private readonly IMainRepository<Comment> _commentRepository;
        private readonly IMainRepository<Stock> _stockRepository;
        public CommentsController(IMainRepository<Comment> commentRepository, IMainRepository<Stock> stockRepository)
        {
            _commentRepository = commentRepository;
            _stockRepository = stockRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _commentRepository.GetAsync(x => x.Stock!);
            return result.Any() ? Ok(result.Select(x => x.FromCommentToDtoDetails())) : NotFound("Nothing was found");
        }

        [HttpGet("{commentid:int}")]
        public async Task<IActionResult> GetById([FromRoute] int commentid)
        {
            var result = await _commentRepository.GetAsync(commentid, x => x.Stock!);
            return result is not null ? Ok(result.FromCommentToDtoDetails()) : NotFound("Nothing was found");
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateCommentDto dto)
        {
            var exists = await _stockRepository.IsExistsAsync(dto.StockId);
            if (!exists) return NotFound("Stock was not found");
            var result = await _commentRepository.CreateAsync(
                Comment.CreateFactory(
                    dto.Title,
                    dto.Content,
                    dto.StockId
                    )
                );
            return result > -1 ? CreatedAtAction(nameof(GetById), new { id = result }) : BadRequest("Failed to create new comment");
        }

        [HttpPut("{commentid:int}")]
        public async Task<IActionResult> Update([FromRoute] int commentid, [FromBody] UpdateCommentDto dto)
        {
            var comment = await _commentRepository.GetAsync(commentid);
            if(comment is null) return NotFound("Nothing was found");
            var result = await _commentRepository.UpdateAsync(Comment.Update(comment, dto.Title, dto.Content));
            return result ? Ok("Comment was updated successfully") : BadRequest("Failed to update comment");
        }

        [HttpDelete("{commentid:int}")]
        public async Task<IActionResult> Delete([FromRoute] int commentid)
        { 
            var comment = await _commentRepository.GetAsync(commentid);
            if(comment is null) return NotFound("Nothing was found");
            var result = await _commentRepository.DeleteAsync(comment);
            return result ? NoContent() : BadRequest("Failed to delete comment");
        }
    }
}