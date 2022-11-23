import { Component, OnInit, Input } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { Ticket } from '../ticket.js';
import { FavoritesService } from '../favorites.service';
import { User as User } from 'oidc-client';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private ticketAPI:TicketsService, private favAPI: FavoritesService) 
  {

  }

  showForm: boolean = false;
  @Input() currentUser: number = 0;
  tickets:Ticket[] = [];
  ticketToDisplay:Ticket = {} as Ticket;
  favorite: Ticket = {} as Ticket;
  favoriteTickets: Ticket[] = [];
 
  ngOnInit(): void {
  }

  GetAllTickets():void
  {
    this.ticketAPI.GetAllTickets().subscribe((results:Ticket[]) => 
    {
      this.tickets = results;
      console.log(results);
    });
  }

  DeleteTicket(i: number):void
  {
   
   this.ticketAPI.DeleteTicket(i).subscribe((result: Ticket) =>
   {
      console.log(result);
   })

  }
  
  AddToFavorite(index: number):void
  {
    
  }

  GetTicketDetails(i: number):void
  {
    
   this.tickets[i].canDisplay = !this.tickets[i].canDisplay;
        
  }

  DisplayForm():void{
  this.showForm = !this.showForm;
  }





}
