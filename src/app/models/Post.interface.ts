import { Comment } from '../models/Comment.interface';

export interface Post {
    id: number;
    authorName: string;
    authorId: number;
    description: string;
    img: string;
    title: string;
    comments: Array<Comment>;
}
