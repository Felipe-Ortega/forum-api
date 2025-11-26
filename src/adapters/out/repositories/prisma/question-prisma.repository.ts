import { Injectable } from "@nestjs/common";
import { Question } from "src/core/entities/question.entity";
import { PrismaService } from "src/database/prisma.service";
import { QuestionRepositoryPort } from "src/ports/outbound/repositories/question.repository.port";

@Injectable()
export class QuestionPrismaRepository implements QuestionRepositoryPort {
  constructor(private prisma: PrismaService) {}

  async create(question: Question): Promise<Question> {
    return await this.prisma.questions.create({
      data: {
        title: question.title,
        body: question.body,
        userId: question.userId,
      },
    });

    }
    async findById(id: number): Promise<Question | null> {
      return await this.prisma.questions.findUnique({
        where: { id },
      });
    }
    async findAll(): Promise<Question[]>{
        return await this.prisma.questions.findMany();
    }
    async update(id: number,body: Partial<Question>,): Promise<Question>{
        return await this.prisma.questions.update({
            data: body,
            where: {id}
        });1
    }

    async delete(id: number): Promise<void>{
        await this.prisma.questions.delete({
            where: {id}
        })
    }
}