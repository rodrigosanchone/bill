import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './componenetes/login/login.component';
import {PruebaComponent} from './componenetes/prueba/prueba.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { InputInfoComponent } from './componenetes/input-info/input-info.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'prueba',component:PruebaComponent,canActivate: [AngularFireAuthGuard]},
  {path:'info',component:InputInfoComponent,canActivate: [AngularFireAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
