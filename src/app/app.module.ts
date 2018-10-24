import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';

// @angular Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @angular Material
import { MaterialModule } from './angular-material';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
