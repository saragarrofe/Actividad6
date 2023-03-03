import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { VistaUserComponent } from './components/user/vista-user/vista-user.component';

const routes: Routes = [
  { path: "", pathMatch:'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: VistaUserComponent },
  { path: '**', component: C404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
