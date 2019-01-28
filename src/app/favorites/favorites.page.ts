import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { PostService } from '../services/post.service';
import { FavoritePost } from '../models/FavoritePosts.interface';
import { Favorites } from '../models/Favorites.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favoritePosts: Array<FavoritePost> = [];
  postIds: Favorites;

  constructor(
    private _favoritesService: FavoritesService,
    private _postsServoce: PostService,
    private _route: Router) { }

  ngOnInit() {
      this._favoritesService.getFavorites().subscribe((post: FavoritePost) => {
      this.favoritePosts.push(post);
      console.log(this.favoritePosts);
    });

  }

  viewPost(postId: number): void {
    this._route.navigate([`/m/timeline/${postId}`]);
  }

}
