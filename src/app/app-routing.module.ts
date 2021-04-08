import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DetailComponent } from './component/detail/detail.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
    {
      path:'', redirectTo:'/shop', pathMatch:'full'
    },
    {
      path:'login',component:LoginComponent
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }