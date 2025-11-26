import { Question } from "src/core/entities/question.entity";

export interface QuestionRepositoryPort{
    create(quetion: Question): Promise<Question>
    findById(id: number): Promise<Question | null>;
    findAll(): Promise<Question[]>;
    update(id: number, question: Partial<Question>): Promise<Question>;
    delete(id: number): Promise<void>;
}