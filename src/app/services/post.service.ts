import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post.interface';

const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  getPosts(authorId: number = 1): Observable<Array<Post>> {
    const test = this._http.get<Array<Post>>(API + `posts/`);
    console.log(test);
    return test;
  }

  getPost(postId: number = 1) {
    return this._http.get<Post>(API + `posts/${postId}`);
  }
}
