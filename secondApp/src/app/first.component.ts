/*
*/

//Typescript to Equivalent HTML tag. It is done using Component class
import {Component} from "@angular/core"

//With the export keyword we can export the class which anyone can import
//Paranthesis are component class constructor which accepts JSON Object
@Component(
    {
        //Selector is used to define custom HTML Tag
        selector: "first",
        //Related HTML to firstComponent
        templateUrl: "./first.component.html"
    }
)

//You should inform to angular framework that I created this component
//We use configuration file named app.module.ts

export class firstComponent
{
    private subjectOne: string;
    private subjectTwo: string;
    private subjectThree: string;

    //Initialize above variables with the help of constructor
    constructor()
    {
        this.subjectOne = "Angular";
        this.subjectTwo ="Nodejs";
        this.subjectThree ="MongoDB";
    };

    //Functions to return each variable saperately
    public getSubjectOne(): string
    {
        return this.subjectOne;
    }

    public getSubjectTwo(): string
    {
        return this.subjectTwo;
    }

    public getSubjectThree(): string
    {
        return this.subjectThree;
    }
};