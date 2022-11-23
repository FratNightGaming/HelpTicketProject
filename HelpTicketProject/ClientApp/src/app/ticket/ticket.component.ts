import { Component, OnInit, Input } from '@angular/core';
import { TicketsService } from '../tickets.service';
import { Ticket } from '../ticket.js';
import { FavoritesService } from '../favorites.service';
import { Favorite } from '../favorite';


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
  fav: Favorite = {} as Favorite;

 
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
      // Wanted to figure out how to auto reload the page so our results show instantly.
      // window.location.reload();
   })

  }
  
  AddToFavorite(id: number):void
  {
    let fav: Favorite = {id:0,ticketId:id,userId:this.currentUser,ticket:null,user:null};
    this.favAPI.AddToFavorites(fav).subscribe((result: Favorite) =>{
      console.log(result);

    })
  }

  GetTicketDetails(id: number):void
  {
    
   for(let i =0; i < this.tickets.length; i++){
  
    let t = this.tickets[i];
  
    if(t.id === id){

      this.tickets[i].canDisplay = !this.tickets[i].canDisplay;
      break;
    }
    
   }
        
  }

  DisplayForm():void{
  this.showForm = !this.showForm;
  }





}
