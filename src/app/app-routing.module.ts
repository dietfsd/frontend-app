import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [

  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"student",component:StudentlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
