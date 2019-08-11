import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ApisComponent } from './apis/apis.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LifeComponent } from './life/life.component';
import { ServicesComponent } from './services/services.component';

//https://www.flipkart.com/vu-play-102cm-40-inch-full-hd-led-tv/p/itmf2rfmpfhxevgy

//https://www.flipkart.com/lee-cooper-lace-up-men/p/itmfa8dtpngugwgy

//http://localhost:4200/forms/mahesh/perla/56
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'var', component:VariablesComponent},
  {path:'dir', component:DirectivesComponent},
  {path:'forms/:fname/:lname/:age', component:FormsComponent},
  {path:'obj-forms', component:ObjFormsComponent},
  {path: 'pipes', component:PipesComponent},
  {path: 'life', component:LifecycleComponent},
  {path: 'apis', component:ApisComponent},
  {path: 'life-cycle', component:LifeComponent},
  {path: 'services', component:ServicesComponent},
  {path: '**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
