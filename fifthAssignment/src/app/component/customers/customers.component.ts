import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import errorCallBack from 'src/app/common/ErrorCallBack';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  private result:any;
  dataSource =[];
  constructor(private _service: CustomersService) { }
  displayedColumns: string[] = ['Name', 'City', 'Country'];
  ngOnInit() {
    this._service.getCustomers().subscribe((posRes)=>{
      this.result = posRes.records;
      this.dataSource = this.result;
      console.log(this.dataSource);
      
      

    },errorCallBack)
  }

}
