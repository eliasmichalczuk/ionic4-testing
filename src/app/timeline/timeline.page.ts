import { Component, ErrorHandler } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Post } from '../models/Post.interface';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.page.html',
  styleUrls: ['timeline.page.scss']
})
export class TimelinePage {

  constructor(private _service: PostService,
    public navCtrl: NavController,
    private _storage: Storage,
    private _route: Router) {
  }

  var = TimelinePage;
  posts: Array<Post> = new Array<Post>();
  posts$: Observable<Post[]> = new Observable<Post[]>();

  // tslint:disable-next-line:use-life-cycle-interface
  async ngOnInit(): Promise<void> {
  await this._service.getPosts(1)
                .subscribe((posts: Array<Post>) => {
                  this.posts = posts;
                  console.log(posts);
                }, err => {
                  console.log(err.message);
                });
                this.saveToStorage(1);
  }

  saveToStorage(postId) {
    // tslint:disable-next-line:prefer-const
    let post11: Post;
    this._service.getPost(postId).subscribe((res: Post) => {
      post11 = res;
    });
    console.log('--> ', JSON.stringify(post11));
    this._storage.set(`post-${postId}`, JSON.stringify(function() {
      this.posts.forEach((post: Post) => {
        if (post.id === postId) {
          return post;
        }
      });
    }));

    this._storage.get(`post-${postId}`).then( post => {
      console.log('post from storage', post);
    });
  }

  viewPost(postId) {
    this._route.navigate(['post']);
  }


}
