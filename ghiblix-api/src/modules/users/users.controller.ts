import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

import {  JwtAuthGuard } from '../../core/auth/shared/jwt-auth.guard';

@Controller('users')
export class UsersController {

  constructor(
    private usersService: UsersService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return await this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.usersService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return await this.usersService.update(id, user);
  }

  
  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.usersService.delete(id);
  }
}
