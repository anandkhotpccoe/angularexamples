import { Component } from '@angular/core';
import { DbService } from '../services/db.service';


@Component(
    {
        selector:"second",
        templateUrl:"./second.component.html"
    }
)
export class SecondComponent
{
    private result: string;
    //Dependency Injection
    constructor(private _service:DbService)
    {

    }

    //First LifeCycle Hook
    //We write the business logic here
    ngOnInit()
    {
     this.result =this._service.mongoDbData();   
    }
}