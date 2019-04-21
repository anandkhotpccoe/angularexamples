import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UppercaseComponent } from './components/uppercase/uppercase.component';
import { HttpClientModule } from '@angular/common/http';

//Importing Form Module to use Form Component
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [UppercaseComponent]
})
export class AppModule { }
