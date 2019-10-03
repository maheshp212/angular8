import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
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
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { CustomComponent } from './custom/custom.component';
import { MaheshTableComponent } from './mahesh-table/mahesh-table.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ApisComponent } from './apis/apis.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {SlideshowModule} from 'ng-simple-slideshow';
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
    FormsComponent,
    ObjFormsComponent,
    AttrDirective,
    ClassDirective,
    CustomComponent,
    MaheshTableComponent,
    UsersListComponent,
    ApisComponent,
    LifecycleComponent,
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
