import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Post } from 'src/app/models/Post.interface';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../../../models/Comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() post: Post;
  comments: Array<Comment>;

  constructor(private _commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.post.comments;
  }

  // const isPresent = function isPresent(comment: Comment) {
  //   return comment.id;
  // };

  newComment() {
    // let newComments: Array<Comment>;
    this._commentService.getComments(this.post.id).subscribe((comments: Array<Comment>) => {
      console.log('--> c', comments);
      this.comments = comments;
    }, err => {
      console.log(err);
    });
    // this.comments = newComments;
  }
}
