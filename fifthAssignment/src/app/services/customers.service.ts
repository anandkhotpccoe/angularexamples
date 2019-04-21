import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import CUSTOMERS from '../common/URLS';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private _http:HttpClient) { }
  getCustomers(): Observable<any>
  {
    return this._http.get(CUSTOMERS);

  }

}
