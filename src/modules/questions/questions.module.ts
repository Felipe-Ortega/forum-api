import { Module } from '@nestjs/common';
import { QuestionsController } from 'src/adapters/in/http/questions/questions.controller';
import { AuthGuard } from 'src/auth/auth.guard';
import { DatabaseModule } from 'src/database/database.module';

// Use Cases
import { CreateQuestionUseCase } from 'src/core/use-cases/questions/create-question.use-case';
import { ListQuestionsUseCase } from 'src/core/use-cases/questions/list-questions.use-case';
import { GetQuestionByIdUseCase } from 'src/core/use-cases/questions/get-question-by-id.use-case';
import { UpdateQuestionUseCase } from 'src/core/use-cases/questions/update-question.use-case';
import { DeleteQuestionUseCase } from 'src/core/use-cases/questions/delete-question.use-case';

// Repository
import { QuestionPrismaRepository } from 'src/adapters/out/repositories/prisma/question-prisma.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [QuestionsController],
  providers: [
  // Use Cases
    CreateQuestionUseCase,
    ListQuestionsUseCase,
    GetQuestionByIdUseCase,
    UpdateQuestionUseCase,
    DeleteQuestionUseCase,
    
    // Repository - Liga a interface à implementação concreta
    {
      provide: 'QuestionRepositoryPort',
      useClass: QuestionPrismaRepository,
    },
  ],
})
export class QuestionsModule {}
