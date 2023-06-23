import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {
  private empId:string=""

  constructor(private http: HttpClient) { }




  getEmployeeById(employeeId: string) {

    const apiUrl = 'http://nhsappchna6210.cscidp.net/rdb/api/employee/'+ employeeId;

    return this.http.get(apiUrl);

  }




  public getId(){

    return this.empId;

  }

  public setId(empId:string){

    this.empId=empId;

  }
}
//   private apiUrl = 'https://temp-80aee-default-rtdb.firebaseio.com/data.json';
//   constructor(private http: HttpClient) { }

//   getEmployeeById(employeeId: number): Observable<any> {
//     return this.http.get<any[]>(this.apiUrl);
//   }
// }
