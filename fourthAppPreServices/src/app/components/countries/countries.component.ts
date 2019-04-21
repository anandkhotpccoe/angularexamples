/*
  --How to generate the component using Angular CLI
    --ng generate component components/countries --skipTests -is
    --is is inline styles
    --skipTests  to skip unit test files
*/
import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {
  private result:any;

  constructor(private _service: CountriesService) { }

  ngOnInit() {

    //Subscribe will catch the response
    //There are two call backs
    this._service.getCountries().subscribe((posRes)=>{
      this.result = posRes;
    },
    (errRes:HttpErrorResponse)=>{
      //error is predefined key
      if(errRes.error instanceof Error)
      {
        console.log("Client Side Error")
      }
      else
      {
        console.log("Server Side Error")
      }
    });
  }

}
