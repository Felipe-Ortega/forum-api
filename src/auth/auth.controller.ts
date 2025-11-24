import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Post('signin')
  signIn(@Body() body: Prisma.UserCreateInput) {
    return this.authService.signIn(body);
  }
}
