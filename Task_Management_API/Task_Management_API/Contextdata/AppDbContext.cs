using Microsoft.EntityFrameworkCore;
using Task_Management_API.Models;

namespace Task_Management_API.Contextdata
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Tasks> tasks { get; set; }
    }

}
