import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { AnswersModule } from './answers/answers.module';
@Module({
  imports: [AuthModule, UserModule, DatabaseModule, QuestionsModule, AnswersModule],
})
export class AppModule {}
