import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VaraiblesComponent } from './varaibles/varaibles.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { PostcurrencyPipe } from './postcurrency.pipe';
import { ReversePipe } from './reverse.pipe';
import { LowerupperPipe } from './lowerupper.pipe';
import { MinusHoursPipe } from './minus-hours.pipe';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { CustomComponent } from './custom/custom.component';
import { MaheshTableComponent } from './mahesh-table/mahesh-table.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    VaraiblesComponent,
    DirectivesComponent,
    FormsComponent,
    ObjFormsComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    PostcurrencyPipe,
    ReversePipe,
    LowerupperPipe,
    MinusHoursPipe,
    AttrDirective,
    ClassDirective,
    CustomComponent,
    MaheshTableComponent,
    UsersListComponent,
    LifecycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
