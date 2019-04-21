import { Component, OnInit } from '@angular/core';
import { UppercaseService } from 'src/app/services/uppercase.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent implements OnInit {

  private result:any;
  constructor(private _service:UppercaseService) { }

  ngOnInit() {

    
  }

  public clickMe(data): any
  {
    this._service.covertToUpperCase(data).subscribe((posRes)=>{
      this.result = Object.values(posRes);
    },(err:HttpErrorResponse)=>
    {
      if(err.error  instanceof Error)
      {
        console.log("Client Side Error");
        
      }
      else
      {
        console.log("Server Side Error ....")
      }
    });
  }

}
