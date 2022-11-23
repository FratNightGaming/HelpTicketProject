import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Favorite } from '../favorite';
import { FavoritesService } from '../favorites.service';
import { Ticket } from '../ticket';
import { TicketsService } from '../tickets.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  username?: string ;
  favTickets: Ticket[] =[];
  favTicketToDisplay: Ticket = {} as Ticket;
  //Do we need this flag?:
  favDisplayed: boolean = false;
  favArray: Favorite[] =[];


  constructor(private ticketAPI: TicketsService, private _Activatedroute:ActivatedRoute, private favAPI: FavoritesService, private userAPI: UsersService) 
  {
   this.username= this._Activatedroute.snapshot.paramMap.get("username")!;
  }

   GetUserId():void
   {
    this.userAPI.GetAllUsers().subscribe((results: User[]) => 
    {
      if(this.username != null)
          {
           for(let i = 0; i < results.length; i++)
            {
              if (results[i].userName === this.username)
              {
                let id: number = results[i].id;
                this.FilterFavorites(id);
              }
            }
          }
    });
   }

   FilterTickets(userId: number):void
   {
      this.ticketAPI.GetAllTickets().subscribe((results:Ticket[]) => 
      {
        for( let i = 0; i < this.favArray.length; i++)
        {
          let f :Favorite = this.favArray[i];
          for( let j = 0; j < results.length; j++)
          {
           if(f.ticketId === results[j].id)
           {
             this.favTickets.push(results[j]);
            
           }
          }
        }
        console.log(this.favTickets);
        console.log(this.favArray);
      });
    
   }

   FilterFavorites(id : number):void
   {
    this.favAPI.GetAllFavorites().subscribe((results:Favorite[]) =>
    { 
      this.favArray = results.filter(f => f.userId === id);     
      console.log(results);
      this.FilterTickets(id);
    });
   }

  //get a list of all of the favorites
   GetAllFavorites():void{
    this.favAPI.GetAllFavorites().subscribe((results:Favorite[]) =>
    {
      this.favArray = results;
      console.log(results);
    });
   }

 //get a list of user favorited tickets.
  GetFavTickets(username: string):void
  {
    console.log(username);
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
