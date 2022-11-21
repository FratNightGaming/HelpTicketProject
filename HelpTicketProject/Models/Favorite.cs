using System;
using System.Collections.Generic;

namespace HelpTicketProject.Models;

public partial class Favorite
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? TicketId { get; set; }

    public virtual Ticket? Ticket { get; set; }

    public virtual User? User { get; set; }
}
