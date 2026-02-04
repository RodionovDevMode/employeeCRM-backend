import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export type Employee = {
  id: string;
  name: string;
  salary: number;
  increase: boolean;
  rise: boolean;
};

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [
    {
      id: uuidv4(),
      name: 'Андрей Родионов',
      salary: 3000,
      increase: false,
      rise: true,
    },
  ];

  findAll(): Employee[] {
    return this.employees;
  }

  create(data: Omit<Employee, 'id'>): Employee {
    const newEmployee: Employee = {
      id: uuidv4(),
      ...data,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }
}
