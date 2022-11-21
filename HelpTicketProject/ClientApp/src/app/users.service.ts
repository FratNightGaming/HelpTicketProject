
import { HttpClient } from '@angular/common/http';
import { Inject,  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser: User = {} as User;
  baseURL:string ="";
  baseControllerRoute:string = "api/Users";

  constructor(private http:HttpClient, @Inject ("BASE_URL") private url:string) 
  { 
    this.baseURL = url;
  }
  
  GetUser(id : number):Observable<User>
  {
    return this.http.get<User>(this.baseURL + this.baseControllerRoute + `/${id}`);
    //We need to add an Id here for the username.
  }

  GetAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseURL + this.baseControllerRoute);
    //not finished 
  }

  AddNewUser(newUser : string): Observable<User>{
    let user : User = {id: 0, userName: newUser, favorites:[]};
    return this.http.post<User>(this.baseURL + this.baseControllerRoute, user);
  }

 
}


// export class TicketsService {


