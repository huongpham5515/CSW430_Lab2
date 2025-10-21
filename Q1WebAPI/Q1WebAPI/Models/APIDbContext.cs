using Microsoft.EntityFrameworkCore;
namespace Q1WebAPI.Models
{
    public class APIDbContext : DbContext
    {
        public APIDbContext(DbContextOptions<APIDbContext> options) : base(options)
        {
          
        }
        public DbSet<Book> Books { get; set; }
    }
}
