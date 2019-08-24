import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ApisComponent } from './apis/apis.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'var', component:VariablesComponent},
  {path:'dir', component:DirectiveComponent},
  {path:'formsss', component:FormsComponent},
  {path:'obj-forms', component:ObjFormsComponent},
  {path:'pipes', component:PipesComponent},
  {path:'apis', component:ApisComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
