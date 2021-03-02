import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  /* declarations - All UI entities (components, directives & pipes) */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent
  ],
  /* imports - module dependency */
  imports: [
    BrowserModule
  ],
  /* providers - NON UI entities (services) */
  providers: [],

  /* bootstrap - Root component(s)  */
  bootstrap: [
    /* AppComponent,  */
    GreeterComponent,
    CalculatorComponent
  ]
})
export class AppModule { }
