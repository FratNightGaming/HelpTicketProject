import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userAPI : UsersService)
   {
    this.GetAllUsers();
   }
  nameNotFound : boolean = false;
  username : string = "";
  allUsers : User[] = [];
  currentUser : User = {} as User;
  newusername : string = "";
  loginExists : boolean = true;
  displayFavorites: boolean = false;

  GetUserName(user : User): void{
    this.userAPI.GetUser(user.id).subscribe((result : User) =>
    {
      console.log(result);
      this.currentUser = user;
    });
  }

  GetAllUsers(): void{
    this.userAPI.GetAllUsers().subscribe((results : User[]) =>
    {
      console.log(results);
      this.allUsers = results;

    });
  }

  Login(): void{

    let nameFound : boolean = false;
    for(let i = 0; i < this.allUsers.length; i++)
    {
      if(this.allUsers[i].userName === this.username)
      {
        console.log(this.allUsers[i]);
        this.currentUser = this.allUsers[i];
        nameFound = true;
        this.nameNotFound = false;
        this.displayFavorites = true;

      }     
    }   
      if(nameFound === false)
      {
        this.nameNotFound = true;
      }
  }
  
  Register(): void{
    this.userAPI.AddNewUser(this.newusername).subscribe((result : User)=>
    {
      if(result === null){
        this.loginExists = false;
      }
      else{
        this.loginExists = true;
        this.currentUser = result;
        this.displayFavorites = true;
      }
      console.log(result);
    });

   }
  ngOnInit(): void {
  }

}





