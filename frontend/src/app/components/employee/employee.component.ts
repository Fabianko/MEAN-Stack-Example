import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  selectedEmployee: Employee = new Employee();

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }


  loadEmployees() {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        console.log(data);
        this.employees = data;
      },
      (err) => {
        console.error(err);
      }
    )
  }


  addEmployee(form?: NgForm) {
    if (form.value._id) {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmployees();
      });
    } else {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employees = res;
    });
  }

  editEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployees();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.selectedEmployee = new Employee();
    }
  }
}
