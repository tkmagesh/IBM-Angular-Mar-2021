import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  /* declarations - All UI entities (components, directives & pipes) */
  declarations: [
    AppComponent,
    GreeterComponent
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
    GreeterComponent
  ]
})
export class AppModule { }
