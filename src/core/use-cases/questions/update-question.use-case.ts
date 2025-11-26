import { Inject, Injectable } from "@nestjs/common";
import { Question } from "src/core/entities/question.entity";
import type { QuestionRepositoryPort } from "src/ports/outbound/repositories/question.repository.port";
import { CreateQuestionDto } from "src/questions/dto/create-question.dto";

@Injectable()
export class UpdateQuestionUseCase {
  constructor(
    @Inject('QuestionRepositoryPort')
    private readonly questionRepo: QuestionRepositoryPort,
  ) {}

  async execute(id: number, dto: CreateQuestionDto): Promise<Question | null> {
    return await this.questionRepo.update(id, dto);
  }
}