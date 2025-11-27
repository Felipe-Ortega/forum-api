import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request } from "@nestjs/common";
import { CreateQuestionUseCase } from "src/core/use-cases/questions/create-question.use-case";
import { DeleteQuestionUseCase } from "src/core/use-cases/questions/delete-question.use-case";
import { GetQuestionByIdUseCase } from "src/core/use-cases/questions/get-question-by-id.use-case";
import { ListQuestionsUseCase } from "src/core/use-cases/questions/list-questions.use-case";
import { UpdateQuestionUseCase } from "src/core/use-cases/questions/update-question.use-case";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('questions')
export class QuestionsController {
  constructor(
    private readonly createQuestionUseCase: CreateQuestionUseCase,
    private readonly listQuestionsUseCase: ListQuestionsUseCase,
    private readonly getQuestionByIdUseCase: GetQuestionByIdUseCase,
    private readonly updateQuestionUseCase: UpdateQuestionUseCase,
    private readonly deleteQuestionUseCase: DeleteQuestionUseCase
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() dto: CreateQuestionDto, @Request() req: any) {
    return await this.createQuestionUseCase.execute(dto, req.sub.userId);
  }

  @Get()
  async listAll(){
    return await this.listQuestionsUseCase.execute();
  }

  @Get(':id')
  async findById(@Param('id') id: string){
    return await this.getQuestionByIdUseCase.execute(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateQuestionDto){
    return await this.updateQuestionUseCase.execute(+id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async delete(@Param('id') id: string){
    return await this.deleteQuestionUseCase.execute(+id);
  }
}