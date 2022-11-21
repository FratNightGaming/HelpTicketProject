using System;
using System.Collections.Generic;

namespace HelpTicketProject.Models;

public partial class Ticket
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public string? TicketIssue { get; set; }

    public string? TicketDetails { get; set; }

    public string? ResolvedBy { get; set; }

    public virtual ICollection<Favorite> Favorites { get; } = new List<Favorite>();
}
