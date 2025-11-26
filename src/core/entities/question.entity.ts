export class Question {
    id: number;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;

    constructor(title: string, body: string, userId: number) {
        this.title = title;
        this.body = body;
        this.userId = userId;
    }
}
