import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserPresenter } from './user.presenter';
//import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '../../auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    const user = await this.usersService.createCommonUser(data);
    return new UserPresenter(user);
  }

  @UseGuards(AuthGuard) 
  // get user one
  @Get(':id')
  async getUserProfile(@Param('id') id: string){
  const user = await this.usersService.findById(id);
   if(!user) {
    throw new NotFoundException('User not found');
   } 
  return user;
}

}
