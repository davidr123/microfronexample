import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) { }

  ngDoBootstrap() {
    const videocomponent = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('app-vide', videocomponent);
  }
 }
