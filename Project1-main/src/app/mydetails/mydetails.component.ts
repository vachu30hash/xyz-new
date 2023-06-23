import { Component } from '@angular/core';
import { EmpDataService } from '../services/emp-data.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent {


employeeId : string='';

  employee: any;

  dateString:string='';




  constructor(private employeeService: EmpDataService,private route: ActivatedRoute,private datePipe: DatePipe) {




   }

  //  formatDate(dateString: string): string {

  //   const date = new Date(dateString);

  //    return this.datePipe.transform(date);

  // }





   

  ngOnInit(): void {

   

   this.employeeId = this.employeeService.getId();




      console.log(this.employeeId);




    this.employeeService.getEmployeeById(this.employeeId).subscribe(

      (data) => {

        // console.log(data);

        if(data){

          this.employee = data;

        }

       

      },

      (error) => {

        console.error(error);

      }




    )}

}






//   employeeId = 19000445;
//   employee: any;

//   constructor(private employeeService: EmpDataService) { }

//   ngOnInit(): void {
//     this.getEmployeeData();
//   }

//   getEmployeeData(): void {
//     this.employeeService.getEmployeeById(this.employeeId).subscribe(
//       (response: any[]) => {
//         const employee = response.find(emp => emp['Employee ID'] == this.employeeId);
//         if (employee) {
//           this.employee = employee;
//         }
//       },
//       (error: any) => {
//         console.error('Error fetching employee data:', error);
//       }
//     );
//   }
// }
