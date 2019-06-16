import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
