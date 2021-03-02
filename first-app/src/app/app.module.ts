import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Calculator2Component } from './calculator2/calculator2.component';

@NgModule({
  /* declarations - All UI entities (components, directives & pipes) */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    Calculator2Component
  ],
  /* imports - module dependency */
  imports: [
    BrowserModule
  ],
  /* providers - NON UI entities (services) */
  providers: [],

  /* bootstrap - Root component(s)  */
  bootstrap: [
    AppComponent, 
   /*  GreeterComponent,
    CalculatorComponent,
    Calculator2Component */
  ]
})
export class AppModule { }
