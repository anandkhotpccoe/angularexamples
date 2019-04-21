/*
    ******************Predefined Services********************
  --The services given by Angular Framework is called Predefined
    services
  --HttpClient is predefined service
  --HttpClient is used to make the REST API calls
  --HttpClient introduced in Angular 4.3
  --HttpClient present in HttpClientModule
  --HttpErrorResponse is the Predefined class
  --HttpErrorResponse class is used to categorize the errors
  --HttpClient, HttpClientModule,HttpErrorResponse is present
    in "@angular/common/http"
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  //Import Modules Here
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
