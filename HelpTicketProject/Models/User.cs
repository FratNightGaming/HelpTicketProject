using System;
using System.Collections.Generic;

namespace HelpTicketProject.Models;

public partial class User
{
    public int? Id { get; set; }

    public string? UserName { get; set; }

    public virtual ICollection<Favorite> Favorites { get; } = new List<Favorite>();
}
