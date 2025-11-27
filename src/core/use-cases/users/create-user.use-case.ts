import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/adapters/in/http/user/dto/create-user.dto";
import { User } from "src/core/entities/user.entity";
import type { UserRepositoryPort } from "src/ports/outbound/repositories/user.repository.ports";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepositoryPort')
    private readonly userRepo: UserRepositoryPort,
  ) {}

  async execute(data: CreateUserDto): Promise<User> {
    const user = new User(data.nome, data.email, data.senha);
    return await this.userRepo.create(user);
  }
}