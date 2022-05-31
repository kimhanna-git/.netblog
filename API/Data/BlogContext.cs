﻿using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class BlogContext : DbContext
    {
        public BlogContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Post> Posts { get; set; }
    }
}
