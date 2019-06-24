import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material imports
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
//components
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MenuSideNavComponent } from './menu-side-nav/menu-side-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationBarComponent,
    MenuSideNavComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
