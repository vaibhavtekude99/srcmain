import { DocumentDetails } from "./DocumentDetails";
import { EmployeeDetails } from "./EmployeeDetails";

export class TravelRequest
{
      travelRequestId : number = 0;
	  travelPurpose : string = '';
	  startDate : Date = new Date();
	  endDate : Date = new Date();
	  managerStatus : string = '';
	  agentStatus : string = '';
	  directorStatus : string = '';
	  employeeDetails : EmployeeDetails = new EmployeeDetails();
	  documentDetails : DocumentDetails = new DocumentDetails();
}