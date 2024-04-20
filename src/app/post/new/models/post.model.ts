
export class PostData {
    constructor(public userId: number, public title: string, public body: string) {
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}