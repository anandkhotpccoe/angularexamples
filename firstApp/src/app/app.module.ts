/*
***** Environmental Setup For Angular *****


1) download and install NodeJS

2) download and install Git

3) download and install VisualStudioCode

4) install yarn tool

	> npm install -g yarn@latest

5) install angular

	> npm install -g @angular/cli@latest

		- cli stands for command line interface.


6) link yarn tool cli tool

	> ng config -g cli.packageManager yarn


7) create the angular application

	> ng new firstApp


8) switch to firstApp

	> cd firstApp


9) execute the angular application

	> ng serve --open

    The Default Port No of Angular is 4200
  > ng serve --port 3100
Directory structure:

1: e2e stands for end to end 
   e2e directory used to write the end to end test cases to angular applications.

node_modules:

it contains libraries 
these libraries helps to execute the angular applications.

src\app:

app folder used to deploy the angular applications.

src\app\app.module.ts

app.module.ts file called as configration file.
app.module.ts file used to register the angular applications.
based on configaration file only angular framework will execute our applications.


src\assets:

assets are used to deploy the static ressources.

src\environments:

ingeneral we have 3 types of environments
1)devlopment environment
2)production environment
3)testing environment

We will configure required environment in this directory.
*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
