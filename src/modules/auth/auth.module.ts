import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from '../../auth/auth.controller';
import { AuthService } from '../../auth/auth.service';
import { UserModule } from '../users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '../../auth/auth.guard';

@Module({
  controllers: [AuthController],
  exports: [AuthGuard],
  providers: [AuthService, AuthGuard],
  imports: [forwardRef(() => UserModule), JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '84600s' },
    }),],
})
export class AuthModule {}
