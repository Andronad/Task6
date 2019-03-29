import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusCodesComponent } from './components/status-codes/status-codes.component';
import { StatusCodeComponent } from './components/status-code/status-code.component';
import {FormsModule} from "@angular/forms";
import { StatusCodeFillPipePipe } from './pipes/status-code-fill-pipe.pipe';
import { MyColorOnDblClickDirective } from './directives/my-color-on-dbl-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    StatusCodesComponent,
    StatusCodeComponent,
    StatusCodeFillPipePipe,
    MyColorOnDblClickDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
