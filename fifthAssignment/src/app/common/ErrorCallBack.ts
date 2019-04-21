import { HttpErrorResponse } from "@angular/common/http";

//Arrow Function
let errorCallBack = (err:HttpErrorResponse) =>
{
    if(err.error instanceof Error)
    {
        console.log("Client Side Error ....");
    }
    else
    {
        console.log("Server Side Error ....");

        
    }
}

export default errorCallBack;