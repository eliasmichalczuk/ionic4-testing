import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../../../models/Comment.interface';
import { CommentService } from 'src/app/services/comment.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  value = '';
  comment: Comment;
  @Input() postId: number;
  @Output() event: EventEmitter<any> = new EventEmitter();

  constructor(private _commentService: CommentService) { }

  ngOnInit() {
  }

  postComment(value: string) {
    this.value = value;
    this.comment =  {
      id: null,
      postId: this.postId,
      date:  new Date().toLocaleDateString('en-US').replace(/\//gi, '-'),
      message: value
    };
    console.log(this.comment);
    this._commentService.postComment(this.comment);
    this.event.emit();
  }

  onKey(value: string) {
    this.value = value;
  }

}
