import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly URL_API_EMPLOYEES = 'http://localhost:3000/api/employees'

  constructor(private httpClient: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.URL_API_EMPLOYEES);
  }

  public postEmployee(employee: Employee) {
    return this.httpClient.post(this.URL_API_EMPLOYEES, employee);
  }

  public getEmployee(id:any): Observable<any> {
    return this.httpClient.get(this.URL_API_EMPLOYEES,);
  }

  public putEmployee(employee: Employee) {
    return this.httpClient.put(this.URL_API_EMPLOYEES + `/${employee._id}`, employee);
  }

  public deleteEmployee(_id: string) {
    return this.httpClient.delete(this.URL_API_EMPLOYEES + `/${_id}`);
  }
}
