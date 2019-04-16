import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first.component';
import { SecondComponent } from './components/second.component';
import { DbService } from './services/db.service';

@NgModule({
  declarations: [
    AppComponent,FirstComponent,SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DbService],
  bootstrap: [FirstComponent]
})
export class AppModule { }
