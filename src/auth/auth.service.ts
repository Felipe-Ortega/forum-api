import { Inject ,Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    
    @Inject()
    private readonly usersService: UserService;

    @Inject()
    private readonly jwtService: JwtService;

    async signIn(params: Prisma.UserCreateInput): Promise<{ access_token: string }> {
        const user = await this.usersService.user({email : params.email});
        if (!user) throw new NotFoundException('User not found');
        if (! await bcrypt.compare(params.password, user.password)) {
            throw new UnauthorizedException('Invalid credentials'); 
        }
        const payload = { sub: user.id};
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }


    
}
