import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MokhComponent } from './mokh/mokh.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './profile/sign-in.component';


const routes: Routes = [
  {
    path:'',
    component: MokhComponent
    },
    {
      path:'register',
      component: RegisterComponent,  
    },
    {
      path:'home',
      component: HomeComponent  
    },
    {
      path:'profile',
      component: SignInComponent 
    },
    
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
