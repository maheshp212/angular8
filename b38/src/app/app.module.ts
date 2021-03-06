import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SlideshowModule} from 'ng-simple-slideshow';

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
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { CustomComponent } from './custom/custom.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ApisComponent } from './apis/apis.component';
import { NotfoundComponent } from './notfound/notfound.component';

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
    AttrDirective,
    ClassDirective,
    CustomComponent,
    LifecycleComponent,
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
