import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateUserUseCase } from "src/core/use-cases/users/create-user.use-case";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class QuestionsController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() dto: CreateUserDto) {
    return await this.createUserUseCase.execute(dto);
  }


  
}