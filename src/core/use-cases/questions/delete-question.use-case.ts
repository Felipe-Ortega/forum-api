import { Inject, Injectable } from "@nestjs/common";
import type { QuestionRepositoryPort } from "src/ports/outbound/repositories/question.repository.port";

@Injectable()
export class DeleteQuestionUseCase {
  constructor(
    @Inject('QuestionRepositoryPort')
    private readonly questionRepo: QuestionRepositoryPort,
  ) {}

  async execute(id: number): Promise<void> {
    await this.questionRepo.delete(id);
  }
}