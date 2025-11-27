import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { CreateUserUseCase } from 'src/core/use-cases/users/create-user.use-case';
import { UserController } from 'src/user/user.controller';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [CreateUserUseCase]
})
export class UserModule {}
