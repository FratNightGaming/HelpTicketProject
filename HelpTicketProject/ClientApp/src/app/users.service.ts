
import { HttpClient } from '@angular/common/http';
import { Inject,  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL:string ="";
  baseControllerRoute:string = "api/Users";

  constructor(private http:HttpClient, @Inject ("BASE_URL") private url:string) 
  { 
    this.baseURL = url;
  }
  
  GetAllTickets():Observable<Ticket[]>
  {
    return this.http.get<Ticket[]>(this.baseURL + this.baseControllerRoute);
  }
 
}


// export class TicketsService {


