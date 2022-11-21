import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private ticketAPI:TicketsService) 
  {

  }

  ngOnInit(): void {
  }

  

}
