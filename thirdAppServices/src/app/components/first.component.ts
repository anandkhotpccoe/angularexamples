import { Component } from '@angular/core';
import { DbService } from '../services/db.service';


@Component(
    {
        selector:"first",
        templateUrl:"./first.component.html"       
    }
)
export class FirstComponent
{
    private result: string;
    constructor(private _service: DbService)
    {
        
    }

    //First LifeCycle Hook
    ngOnInit()
    {
        this.result = this._service.mysqlData();
    }

}