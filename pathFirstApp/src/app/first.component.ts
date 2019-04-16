import { Component } from "@angular/core";




@Component(
    {
        selector: "path",
        templateUrl: "./first.component.html"
    }
)
export class Path{

    private variable: string;

    constructor()
    {
        this.variable = "Good Morning Vinay Ji!!!"
    }


    public getVariable(): string
    {
        return this.variable;
    }
}