//Helps to execute  the project into different browsers
import { BrowserModule } from '@angular/platform-browser';

//Helps to create Custom Modules
import { NgModule } from '@angular/core';

//Default Component
import { AppComponent } from './app.component';
//first Component is Custom Component  which we defined
import { firstComponent } from './first.component';

@NgModule({
  //Used to Register the Components
  declarations: [
    AppComponent,firstComponent
  ],

  //Used to Register the Module
  imports: [
    BrowserModule
  ],

  //Used to Register the Services
  providers: [],

  //To execute particular component
  bootstrap: [firstComponent]
})
export class AppModule { }
