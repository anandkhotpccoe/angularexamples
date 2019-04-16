/*
* Services *

 - Services are used to share the common business logic to multiple components.

 - By Using Services we can overcome data redundancy.

 - we have two types of services.

  1) Predefined Services

  2) Custom Services

 - The Services given by angular called as Predefined Services.

 - The Services Developed by us based on application requirement called as
   Custom Services.

   ** Custom Services **

 - Injectable is the Predefined class in Angular.

 - Injectable class used to create the Custom Service.

 - Injectable class available in @angular/core package.

 -  The communication between Service and Component is
    called Dependency Injection


*/


import {Injectable} from "@angular/core"


@Injectable()
export class DbService{

    mysqlData(): string
    {
        return "MySQL Data Soon ....";
    }

    mongoDbData():string
    {
        return "Mongo DB Data Soon ...."
    }

}