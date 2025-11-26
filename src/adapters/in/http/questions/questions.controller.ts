import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import type { Prisma, User } from "@prisma/client";
import { CreateQuestionUseCase } from "src/core/use-cases/questions/create-question.use-case";
import { DeleteQuestionUseCase } from "src/core/use-cases/questions/delete-question.use-case";
import { GetQuestionByIdUseCase } from "src/core/use-cases/questions/get-question-by-id.use-case";
import { ListQuestionsUseCase } from "src/core/use-cases/questions/List-questions.use-case";
import { UpdateQuestionUseCase } from "src/core/use-cases/questions/update-question.use-case";
import { CreateQuestionDto } from "src/questions/dto/create-question.dto";

@Controller('questions')
export class QuestionsController {
  constructor(
    private readonly createQuestionUseCase: CreateQuestionUseCase,
    private readonly listQuestionsUseCase: ListQuestionsUseCase,
    private readonly getQuestionByIdUseCase: GetQuestionByIdUseCase,
    private readonly updateQuestionById: UpdateQuestionUseCase,
    private readonly deleteQuestionById: DeleteQuestionUseCase
  ) {}

  @Post()
  async create(@Body() dto: CreateQuestionDto, idUser: number) {
    return await this.createQuestionUseCase.execute(dto, idUser);
  }
  @Get()
  async listAll(){
    return await this.listQuestionsUseCase.execute();
  }
  @Get(':id')
  async findById(@Param('id')  id: number){
    return await this.getQuestionByIdUseCase.execute(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: CreateQuestionDto){
    return await this.updateQuestionById.execute(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id:number){
    return await this.deleteQuestionById.execute(id);
  }
}