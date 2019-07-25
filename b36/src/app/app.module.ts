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
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe, AppendPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { SmallcapsPipe } from './smallcaps.pipe';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { CustomComponent } from './custom/custom.component';
import { MaheshTableComponent } from './mahesh-table/mahesh-table.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ApisComponent } from './apis/apis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    FormsComponent,
    ObjFormsComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    AppendPipe,
    SmallcapsPipe,
    AttrDirective,
    ClassDirective,
    CustomComponent,
    MaheshTableComponent,
    LifecycleComponent,
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
