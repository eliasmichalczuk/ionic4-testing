import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post.interface';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  postId: number;
  post: Post;
  post$: Observable<Post>;

  constructor(
    private acRouse: ActivatedRoute,
    private postService: PostService,
    private titleService: Title) { }

  async ngOnInit() {
    this.titleService.setTitle('Post');
    // tslint:disable-next-line:radix
    this.postId = parseInt(this.acRouse.snapshot.paramMap.get('postId'));
    this.post$ = this.postService.getPost(this.postId);
    this.postService.getPost(this.postId).subscribe((post: Post) => {
      this.post = post;
      console.log('POST --->>', this.post);
    });
  }

}
