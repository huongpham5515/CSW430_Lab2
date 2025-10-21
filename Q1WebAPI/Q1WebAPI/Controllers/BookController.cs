using Microsoft.AspNetCore.Mvc;
using Q1WebAPI.Models;

namespace Q1WebAPI.Controllers
{
    [ApiController]
    [Route("huongpham/[controller]")]
    public class BookController : Controller
    {
        private readonly APIDbContext _dbContext;
        public BookController(APIDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpGet]
        public async Task<List<Book>> getBookList()
        {
            return _dbContext.Books.ToList();
        }

        [HttpGet("{id}")]
        public async Task<Book> getBookById(int id)
        {
            return _dbContext.Books.Find(id);
        }

        [HttpPost]
        public async Task<IActionResult> addBook([FromBody] Book book)
        {
            _dbContext.Books.Add(book);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> updateBook(int id, [FromBody] Book updated)
        {
            var book = _dbContext.Books.Find(id);
            if (book == null)
            {
                return NotFound();
            }
            if (!string.IsNullOrEmpty(updated.name)) book.name = updated.name;
            if (!string.IsNullOrEmpty(updated.description)) book.description = updated.description;
            if (updated.price != 0 || updated.price != null) book.price = updated.price;
            if (!string.IsNullOrEmpty(updated.note)) book.note = updated.note;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteBook(int id)
        {
            var existingBook = _dbContext.Books.Find(id);
            if (existingBook == null)
            {
                return NotFound();
            }
            _dbContext.Books.Remove(existingBook);
            _dbContext.SaveChanges();
            return Ok();
        }

    }
}
