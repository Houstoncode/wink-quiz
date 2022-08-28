import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User } from 'src/user/user.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/sign-in')
  signIn(@User() user) {
    return this.authService.signIn(user);
  }

  // @Post('/sign-up')
  // signUp(@Body() userDto: CreateUserDto) {
  //   return this.authService.signUp(userDto);
  // }
}
