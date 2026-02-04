import { Injectable } from '@nestjs/common';

export type Employee = {
  id: number;
  name: string;
  position: string;
};

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [
    { id: 1, name: 'Андрей', position: 'Developer' },
    { id: 2, name: 'Валентина', position: 'Designer' },
  ];

  findAll(): Employee[] {
    return this.employees;
  }

  create(employee: Omit<Employee, 'id'>): Employee {
    const newEmployee: Employee = {
      id: this.employees.length + 1,
      ...employee,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }
}
