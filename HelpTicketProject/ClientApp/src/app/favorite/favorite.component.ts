import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() username: string ="";
  favTickets: Ticket[] =[];
  favTicketToDisplay: Ticket = {} as Ticket;
  //Do we need this flag?:
  favDisplayed: boolean = false;

  constructor(private ticketAPI: TicketsService) { }

  GetFavTickets(username: string):void
  {
    this.ticketAPI.GetAllTickets().subscribe((results:Ticket[]) => 
    {
      if(this.favDisplayed === false)
      {
        for(let i = 0; i < results.length; i++)
        {
          if(results[i].name === username)
          {
            this.favTickets.push(results[i]);
          }
        }
      }
   
      this.favDisplayed = true;
      console.log(results);
      console.log(this.favTickets);
      
    });
  }
  
  ngOnInit(): void {
  }

}
