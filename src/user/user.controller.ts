import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UserCreateDto } from './user-create.dto';
import { UserUpdateDto } from './user-update.dto';
import { UserService } from './user.service';
// import { Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  store(@Body() createUserDto: UserCreateDto) {
    return this.userService.store(createUserDto);
  }

  @Patch('/:userId')
  async update(
    @Body() userupdatedto: UserUpdateDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(userupdatedto, userId);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUser(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
}
