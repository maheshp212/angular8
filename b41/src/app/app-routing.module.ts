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


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'var', component:VariablesComponent},
  {path:'dir', component: DirectivesComponent},
  {path:'forms', component: FormsComponent},
  {path:'obj-forms', component: ObjFormsComponent},
  {path:'pipe', component: PipesComponent},
  {path:'life-cycle', component: LifecycleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
