import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/Comment.interface';

const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _http: HttpClient) { }

  postComment(comment: Comment) {
    this._http.post(API + 'comments', comment).subscribe(null, err => {
    });
  }

  getComments(postId: number) {
    return this._http.get(API + `posts/${postId}/comments`);
  }
}
