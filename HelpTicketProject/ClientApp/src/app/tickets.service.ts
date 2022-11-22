import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  baseURL:string ="";
  baseControllerRoute:string = "api/Tickets"
  constructor(private http:HttpClient, @Inject ("BASE_URL") private url:string) 
  { 
    this.baseURL = url;
  }

  GetAllTickets():Observable<Ticket[]>
  {
    return this.http.get<Ticket[]>(this.baseURL + this.baseControllerRoute);
  }
  
  GetTicket(index : number):Observable<Ticket>
  {
    //Does index need to be index.ToString()?
     return this.http.get<Ticket>(this.baseURL + this.baseControllerRoute + '/' + index);

  }

  AddNewTicket(ticket : Ticket):Observable<Ticket>
  {
    return this.http.post<Ticket>(this.baseURL + this.baseControllerRoute, ticket);
  }

  DeleteTicket(index: number):Observable<Ticket>
  {
    return this.http.delete<Ticket>(this.baseURL + this.baseControllerRoute + '/' + index);
  }

}
