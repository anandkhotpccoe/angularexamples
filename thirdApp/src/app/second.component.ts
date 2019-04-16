import { Component } from "@angular/core"

@Component(
    {
        selector:"second",
        templateUrl:"./second.component.html"
    }
)
export class SecondComponent
{
    mongodbData():string
    {
        return "Mongo DB Data Soon";
    }
};