/*
  --How to create Services using Angular CLI ?
    --ng generate service <servicename>
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

//Reactive  Javascipt Package
import { Observable } from 'rxjs';

@Injectable({
  //This means this service available to entire application
  //No need to register this service in Providers
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http:HttpClient) { }

  //Async or AJAX data
  //Observable Data
  public getCountries():Observable<any>
  {
    return this._http.get("https://restcountries.eu/rest/v2/all")
  }
}
