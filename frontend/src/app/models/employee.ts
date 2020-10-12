export class Employee {
  name: string;
  office: string;
  position: string;
  salary: number;
  _id?: string;

  constructor(_id = "", name = "", position = "", office = "", salary = 0) {
    this._id = _id;
    this.name = name;
    this.position = position;
    this.office = office;
    this.salary = salary;
  }
}
