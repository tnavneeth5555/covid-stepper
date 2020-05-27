import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { MerchantdashboardComponent } from './merchantdashboard/merchantdashboard.component';

import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu4Component } from './menu4/menu4.component';
import { Menu5Component } from './menu5/menu5.component';
import { Menu6Component } from './menu6/menu6.component';
import { Menu3Component } from './menu3/menu3.component';
import { AdditemComponent } from './additem/additem.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SafetytipsComponent } from './safetytips/safetytips.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { BookslotComponent } from './bookslot/bookslot.component';
import { BookComponent } from './book/book.component';
import { GraphQLModule } from './graphql.module';
import { MybookingsComponent } from './mybookings/mybookings.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    HomeComponent,
    HelpComponent,
    AboutusComponent,
    RegisterComponent,
    LogindashboardComponent,
    MerchantdashboardComponent,
  
    Menu1Component,
    Menu2Component,
    Menu4Component,
    Menu5Component,
    Menu6Component,
    Menu3Component,
    AdditemComponent,
    ContactusComponent,
    SafetytipsComponent,
    ComplaintComponent,
    BookslotComponent,
    BookComponent,
    MybookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GraphQLModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
