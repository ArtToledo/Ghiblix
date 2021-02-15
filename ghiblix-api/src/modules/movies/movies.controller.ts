import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

  constructor(
    private moviesService: MoviesService
  ) {} 

  @Get()
  async getAll() {
    return await this.moviesService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id:number) {
    return await this.moviesService.findOne(id);
  }
}
