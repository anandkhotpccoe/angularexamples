import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Path } from './first.component';
import { DummyComponent } from './components/dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,Path, DummyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Path]
})
export class AppModule { }
