import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  newTicket: Ticket = {} as Ticket;
  userName: string = "";
  email: string = "";
  ticketIssue: string = "";
  ticketDetail: string = "";

  constructor(private ticketService: TicketsService) { }

  ngOnInit(): void {
  }

  AddTicket(): void 
  {
  this.newTicket.name = this.userName;
  this.newTicket.email = this.email;
  this.newTicket.ticketIssue = this.ticketIssue;
  this.newTicket.ticketDetails = this.ticketDetail;
  this.ticketService.AddNewTicket(this.newTicket).subscribe((result: Ticket)=>
  {
    console.log(result);
  });

    

  }

}
