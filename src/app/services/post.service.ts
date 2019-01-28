import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { Post } from '../models/Post.interface';

const API = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  getPosts(authorId: number = 1): Observable<Array<Post>> {
    const response = this._http.get<Array<Post>>(API + `posts/`);
    console.log(response);
    return response;
  }

  getPostsFromObservable(ids: number[]): Observable<Post> {
    return from(ids).pipe(
      mergeMap(id => <Observable<Post>> this._http.get(API + `posts/` + id)
      .pipe(catchError(() => of(undefined))))
    );
  }

  getPost(postId: number = 1) {
    return this._http.get<Post>(API + `posts/${postId}` + `?_embed=comments`);
  }
}
