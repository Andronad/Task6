import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusCodesComponent } from './components/status-codes/status-codes.component';
import { StatusCodeComponent } from './components/status-code/status-code.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusCodesComponent,
    StatusCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
