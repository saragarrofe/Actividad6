import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { UserViewComponent } from './components/home/user-view/user-view.component';


const routes: Routes = [
  { path: "", pathMatch:'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserViewComponent },
  { path: 'newuser', component: FormComponent },
  { path: 'updateuser/:id', component: FormComponent },
  { path: '**', component: C404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
