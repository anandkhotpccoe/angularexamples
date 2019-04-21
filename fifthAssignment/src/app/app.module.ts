import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import {MatTableModule} from "@angular/material"
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CustomersComponent } from './component/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,MatTableModule
  ],
  providers: [],
  bootstrap: [CustomersComponent]
})
export class AppModule { }
