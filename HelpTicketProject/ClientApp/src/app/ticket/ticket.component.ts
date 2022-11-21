import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { Ticket } from '../ticket.js';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private ticketAPI:TicketsService) 
  {

  }

  username: string = "";

  tickets:Ticket[] = [];
  ticketToDisplay:Ticket = {} as Ticket;

  ngOnInit(): void {
  }

  GetAllTickets():void
  {
    this.ticketAPI.GetAllTickets().subscribe((t:Ticket[]) => 
    {
      this.tickets = t;
      console.log(t)
    });
  }

  // GetAllTickets():void
  // {
  //   this.ticketAPI.GetAllTickets().subscribe((t:Ticket[]) => 
  //   {
  //     this.tickets = t;
  //     console.log(t)
  //   });
  // }

}
