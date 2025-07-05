using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore; 

namespace finglide_api.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        } 
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        { 
            base.OnModelCreating(builder); 

            builder.Entity<IdentityRole>().HasData(
                [
                    new IdentityRole {
                        Id = "da9ec84e-5e35-42cb-931b-f14a3a534fc9",
                        Name = "Admin",
                        NormalizedName = "ADMIN"
                    },
                    new IdentityRole {
                        Id = "50912174-7a55-4b68-9f47-ec58d8fcfdef",
                        Name = "User",
                        NormalizedName = "USER"
                    }
                ]
            );

            builder.Entity<Portfolio>(x =>
            { 
                x.HasKey(p => p.Id);
 
                x.Property(p => p.Id)
                .ValueGeneratedOnAdd();
 
                x.HasIndex(p => new { p.StokeId, p.UserId })
                .IsUnique();
            });

            builder.Entity<Portfolio>()
                .HasOne(u => u.User)
                .WithMany(s => s.Portfolios)
                .HasForeignKey(k => k.UserId);

            builder.Entity<Portfolio>()
                .HasOne(u => u.Stock)
                .WithMany(s => s.Portfolios)
                .HasForeignKey(k => k.StokeId); 
        }
    }
}