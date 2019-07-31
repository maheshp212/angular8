import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VaraiblesComponent } from './varaibles/varaibles.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'in-tro', component:IntroComponent},
  {path:'var', component:VaraiblesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
