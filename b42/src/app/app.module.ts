import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ObFormsComponent } from './ob-forms/ob-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { SqrtPipe } from './sqrt.pipe';
import { ReversePipe } from './reverse.pipe';
import { NumreversePipe } from './numreverse.pipe';
import { AsciiPipe } from './ascii.pipe';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { CustomComponent } from './custom/custom.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ApisComponent } from './apis/apis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    FormsComponent,
    ObFormsComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    SqrtPipe,
    ReversePipe,
    NumreversePipe,
    AsciiPipe,
    AttrDirective,
    ClassDirective,
    CustomComponent,
    LifeCycleComponent,
    ApisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//components -- page
// directives -- block
// pipes -- formatting the text
// services -- api calling