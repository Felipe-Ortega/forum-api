import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/core/entities/user.entity";
import { UserRepositoryPort } from "src/ports/outbound/repositories/user.repository.ports";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class UserPrismaRepository implements UserRepositoryPort {

    @Inject()
    private readonly prisma: PrismaService;

    async create(user: User): Promise<User> {
        return await this.prisma.user.create({
            data: user
        })
    }
    
    findById(id: number): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    findByEmail(email: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    update(id: number, user: Partial<User>): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
  
}