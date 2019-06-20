import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material imports
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

//components
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
