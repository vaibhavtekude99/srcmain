import { Component, OnInit } from '@angular/core';
import { TravelRequest } from 'src/app/pojo/TravelRequest';

@Component({
  selector: 'app-raise-request',
  templateUrl: './raise-request.component.html',
  styleUrls: ['./raise-request.component.css']
})
export class RaiseRequestComponent implements OnInit {

  constructor(private travelRequest:TravelRequest) { }

  ngOnInit(): void {
  }
  onClickSubmit()
  {
    // console.log(this.travelRequest);
    // // this.submitted=true;
    
    //  this.loginService.userLogin(this.loginDetails).subscribe(data=>{
    //    this.loginDetails=data;
    //    console.log(this.loginDetails);

   }
}
