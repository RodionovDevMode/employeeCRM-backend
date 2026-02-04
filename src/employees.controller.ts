import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import type { Employee } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getAll(): Employee[] {
    return this.employeesService.findAll();
  }

  @Post()
  create(@Body() employeeData: Omit<Employee, 'id'>): Employee {
    return this.employeesService.create(employeeData);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Employee {
    const employee = this.employeesService
      .findAll()
      .find((e) => e.id === parseInt(id, 10));
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    return employee;
  }
}
