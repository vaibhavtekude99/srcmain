import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelRequest } from 'src/app/pojo/TravelRequest';
@Injectable({
  providedIn: 'root'
})
export class TravelRequestDetailsService {
  baseURL : string ="http://localhost:8080/employeeDetails/employee";

  constructor(private http: HttpClient) { }

  
  getAllTravelRequestDetails(): Observable<TravelRequest[]>
  {
    return this.http.get<TravelRequest[]>(this.baseURL);
  }

 
  getSingleTravelRequestDetailById(travelRequestId:number):Observable<TravelRequest>
  {
    console.log("inside service get Singlelogin method")
    return this.http.get<TravelRequest>(this.baseURL+'/'+travelRequestId);
  }
 
}

