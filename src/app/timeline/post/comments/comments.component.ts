import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post.interface';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() post: Post;
  comments: Array<Comment>;
  constructor() { }

  ngOnInit() {
    this.comments = this.post.comments;
  }

}
