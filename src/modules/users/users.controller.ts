import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
  @Post()
  async create(@Body() createCatDto: any) {
    return this.usersService.create(createCatDto);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: any) {
    return this.usersService.update(id, updateCatDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
