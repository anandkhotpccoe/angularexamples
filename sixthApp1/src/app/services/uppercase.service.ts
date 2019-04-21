import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import URL from '../common/URLS';

@Injectable({
  providedIn: 'root'
})
export class UppercaseService {

  //POST Request
  //We post some data
  //We get some response
  constructor(private _http:HttpClient) { }
  public covertToUpperCase(data)
  {
    return this._http.post(URL,data)
  }
}
