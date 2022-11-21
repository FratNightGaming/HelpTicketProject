using System;
using System.Collections.Generic;
using HelpTicketProject.Models;
using Microsoft.EntityFrameworkCore;

namespace HelpTicketProject.Services;

public partial class HelpDeskDbContext : DbContext
{
    public HelpDeskDbContext()
    {
    }

    public HelpDeskDbContext(DbContextOptions<HelpDeskDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Favorite> Favorites { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=HelpDeskDB;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3214EC07A7B5D3AE");

            entity.HasOne(d => d.Ticket).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.TicketId)
                .HasConstraintName("FK__Favorites__Ticke__3B75D760");

            entity.HasOne(d => d.User).WithMany(p => p.Favorites)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Favorites__UserI__3A81B327");
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Tickets__3214EC07266FCF68");

            entity.Property(e => e.Email).HasMaxLength(50);
            entity.Property(e => e.Name).HasMaxLength(30);
            entity.Property(e => e.ResolvedBy).HasMaxLength(30);
            entity.Property(e => e.TicketDetails).HasMaxLength(500);
            entity.Property(e => e.TicketIssue).HasMaxLength(200);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC077B35BE5D");

            entity.Property(e => e.UserName).HasMaxLength(30);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
