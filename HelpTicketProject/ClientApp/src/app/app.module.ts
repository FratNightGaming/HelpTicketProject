import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket/ticket.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
//is this because the link in under tickets??


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    TicketComponent,
    FavoriteComponent,
    UserComponent,
    LoginComponent,
    AddTicketComponent,
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Ticket', component: TicketComponent },
      { path: 'Favorite/:username', component: FavoriteComponent},
      { path: 'User', component: UserComponent},
      { path: 'Login', component: LoginComponent},
      { path: 'AddTicket', component: AddTicketComponent},
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
