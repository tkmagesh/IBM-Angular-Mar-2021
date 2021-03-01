import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  /* declarations - All UI entities (components, directives & pipes) */
  declarations: [
    AppComponent
  ],
  /* imports - module dependency */
  imports: [
    BrowserModule
  ],
  /* providers - NON UI entities (services) */
  providers: [],

  /* bootstrap - Root component(s)  */
  bootstrap: [AppComponent]
})
export class AppModule { }
