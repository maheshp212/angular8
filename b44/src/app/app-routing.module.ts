import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormComponent } from './form/form.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'intro', component: IntroComponent},
  {path:'var', component:VariablesComponent},
  {path:'dir', component:DirectivesComponent},
  {path:'forms', component:FormComponent},
  {path:'obj-forms', component:ObjFormsComponent},
  {path:'pipes', component:PipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }