import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent} from './aboutus/aboutus.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HelpComponent} from './help/help.component';
import {HomeComponent} from './home/home.component';
import {LogindashboardComponent} from './logindashboard/logindashboard.component';
import {MerchantdashboardComponent} from './merchantdashboard/merchantdashboard.component';
import {Menu1Component} from './menu1/menu1.component';
import {Menu2Component} from './menu2/menu2.component';
import {Menu3Component} from './menu3/menu3.component';
import {Menu4Component} from './menu4/menu4.component';
import {Menu5Component} from './menu5/menu5.component';
import {Menu6Component} from './menu6/menu6.component';
import {AdditemComponent} from './additem/additem.component';
import {ContactusComponent} from './contactus/contactus.component';
import {SafetytipsComponent} from './safetytips/safetytips.component';
import {BookslotComponent} from './bookslot/bookslot.component';
import {BookComponent} from './book/book.component';
import {ComplaintComponent} from './complaint/complaint.component';
import {MybookingsComponent} from './mybookings/mybookings.component';
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'bookslot', component:  BookslotComponent,
        children:[
        { path: 'book', component:BookComponent},
        { path: 'complaint', component: ComplaintComponent}] 
  },
  { path: 'logindashboard', component: LogindashboardComponent  },
  { path: 'mybookings', component: MybookingsComponent  },
  { path: 'contactus', component: ContactusComponent },
  { path: 'safetytips', component: SafetytipsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'help', component: HelpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'merchantdashboard', component: MerchantdashboardComponent ,
          children:[
            { path: 'menu1', component: Menu1Component},
            { path: 'menu2', component: Menu2Component},
            { path: 'menu3', component: Menu3Component},
            { path: 'menu4', component: Menu4Component},
            { path: 'menu5', component: Menu5Component},
            { path: 'menu6', component: Menu6Component},
          
              ]
  },
  { path: 'additem', component: AdditemComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{
  onSameUrlNavigation:'reload',useHash:true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
