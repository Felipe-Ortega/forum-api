import { Inject, Injectable } from "@nestjs/common";
import { Question } from "src/core/entities/question.entity";
import type { QuestionRepositoryPort } from "src/ports/outbound/repositories/question.repository.port";
import { CreateQuestionDto } from "src/adapters/in/http/questions/dto/create-question.dto";

@Injectable()
export class CreateQuestionUseCase {
  constructor(
    @Inject('QuestionRepositoryPort')
    private readonly questionRepo: QuestionRepositoryPort,
  ) {}

  async execute(data: CreateQuestionDto, userId: number): Promise<Question> {
    const question = new Question(data.title, data.body, userId);
    return await this.questionRepo.create(question);
  }
}