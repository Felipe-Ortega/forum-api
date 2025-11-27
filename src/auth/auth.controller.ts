import { Body, Controller, Get, HttpCode, HttpStatus, Post,   Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Post('signin')
  signIn(@Body() body: Prisma.UserCreateInput) {
    return this.authService.signIn(body);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  
}
