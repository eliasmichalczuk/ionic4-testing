import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _http: HttpClient) { }
}
