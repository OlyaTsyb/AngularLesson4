import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {PostService} from './post.service';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]> {

  constructor(private postService: PostService) {
  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    console.log(this.postService.getPosts());
    return this.postService.getPosts();
  }

}
