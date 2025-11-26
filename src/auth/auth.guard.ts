import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthGuard implements CanActivate {

  @Inject()
  private readonly jwtService: JwtService

  //Verifico se o usuário está autenticado
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>{

    //Estou pegando uma requisição HTTP
    const request = context.switchToHttp().getRequest();
    //Extraio o token do header authorization
    const authorization = this.extractTokenFromHeader(request);
    //Verifico se o token existe
    if (!authorization) throw new UnauthorizedException('No token provided');
    try {
        //Verifico se o token é válido
        const payload = await this.jwtService.verifyAsync(authorization,
        { secret: process.env.SECRET_KEY }

        );
        //Adiciono o payload na request
        request['sub'] = payload;
    } catch {
        throw new UnauthorizedException('Invalid token');
    }
    return true;
  }

  
  private extractTokenFromHeader(request: Request): string | undefined {
    //Pego uma request e verifico se existe o header authorization
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
