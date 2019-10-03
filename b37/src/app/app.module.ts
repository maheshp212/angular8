import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { ApisComponent } from './apis/apis.component';
import { NotfoundComponent } from './notfound/notfound.component';

import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectiveComponent,
    FormsComponent,
    ObjFormsComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    ApisComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
