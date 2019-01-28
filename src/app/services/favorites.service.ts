import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post.interface';
import { Favorites } from '../models/Favorites.interface';
import { PostService } from './post.service';
import { Observable } from 'rxjs';
import { FavoritePost } from '../models/FavoritePosts.interface';

const API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favoritePosts: FavoritePost;
  private favoritePostsIds: Favorites;

  constructor(
    private _http: HttpClient,
    private _postService: PostService) {
  }

  addFavorite(postId: number) {
    this.favoritePostsIds.postIds.push(postId);
    this._http.put(API + `favorites`, this.favoritePosts);
  }

  private fetchFavorites() {
    this._http.get(API + 'favorites').subscribe((postsIds: Favorites) => {
      this.favoritePostsIds = postsIds;
      console.log('--> favorites 1', this.favoritePostsIds);
    });
  }

  removeFavorite(postId: number) {
    this.favoritePostsIds.postIds.filter((post: number) => {
      return post !== postId;
    });
    this._http.put(API + `favorites`, this.favoritePosts);
  }

  getFavorites(): Observable<FavoritePost> {
    const array = [1, 2];
    return this._postService.getSlicedPostsFromObservable(array);
  }

}
