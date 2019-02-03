import { Component, ErrorHandler } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Post } from '../models/Post.interface';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

const ids = Observable.create(function(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.page.html',
  styleUrls: ['timeline.page.scss']
})
export class TimelinePage {

  constructor(private _service: PostService,
    public navCtrl: NavController,
    private _storage: Storage,
    private _route: Router,
    private titleService: Title) {
  }

  var = TimelinePage;
  posts: Array<Post> = new Array<Post>();
  posts$: Observable<Post[]> = new Observable<Post[]>();

  // tslint:disable-next-line:use-life-cycle-interface
  async ngOnInit(): Promise<void> {
  await this._service.getPosts()
                .subscribe((posts: Array<Post>) => {
                  this.posts = posts;
                  console.log(posts);
                }, err => {
                  console.log(err.message);
                });

  //  await this._service.getPostsFromObservable(ids)
  //                     .subscribe((post: Post) => {
  //                       this.posts.push(post);
  //                     }, err => console.log(err));
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

  viewPost(postId: number): void {
    this._route.navigate([`/m/timeline/${postId}`]);
  }


}
