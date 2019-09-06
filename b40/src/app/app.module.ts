import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { RomanPipe } from './roman.pipe';
import { WordsLengthPipe } from './words-length.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    RomanPipe,
    WordsLengthPipe,
    DirectivesComponent,
    FormsComponent
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
