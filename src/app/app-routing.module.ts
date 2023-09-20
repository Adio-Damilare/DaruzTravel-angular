import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './Layout/main/main.component';

const routes: Routes = [
  {
    path:"",component:MainComponent, title:"Daruz",children:[
      {
        path:"",component:LandingPageComponent
      },
      {
        path:'login',component:LoginComponent,title:'Login page'
    
      },
      {
        path:'register',component:RegisterComponent,title:"Register page"
      },
    ]
  },
  {
    path:'**',redirectTo:'/'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
