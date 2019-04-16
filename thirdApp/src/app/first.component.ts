import {Component} from "@angular/core"


@Component(
    {
        selector: "first",
        templateUrl:"./first.component.html"
    }
)
export class FirstComponent
{
    mysqlData():string
    {
        return "Welcome to Mysql";
    }
}