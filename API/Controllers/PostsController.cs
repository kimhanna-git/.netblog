using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : ControllerBase
    {
        private readonly BlogContext _context;
        private readonly IMapper _mapper;

        public PostsController(BlogContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<Post>>> GetPosts()
        {
            return await _context.Posts.ToListAsync();
            
        }
        [HttpGet("{id}", Name = "GetPost")]
        public async Task<ActionResult<Post>> GetPost(int id)
        {
            return await _context.Posts.FindAsync(id);
        }
        //[Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<Post>> CreatePost(CreatePostDto postDto)
        {
            var post = _mapper.Map<Post>(postDto);
            _context.Posts.Add(post);
            var result = await _context.SaveChangesAsync() > 0;
            if (result) return CreatedAtRoute("GetPost", new { Id = post.Id }, post);
            return BadRequest();
        }
        
    }
}
