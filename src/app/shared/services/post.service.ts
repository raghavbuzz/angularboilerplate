import { Injectable } from '@angular/core';
import { IPost } from 'src/app/shared/interface/IPost';
import { MetaDataService } from './meta-data.service';
import { ApiRoute } from '../meta/api-routes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService extends MetaDataService {
  createPost(post: IPost): Observable<IPost> {
    return this.post(ApiRoute.BASE_ROUTE + ApiRoute.CREATE_POST, post);
   // return of({ id: 1, title: 'Title', userId: 101, body: 'Body' });
  }
  getPost(postId: number): Observable<IPost> {
    return this.get(ApiRoute.BASE_ROUTE + ApiRoute.GET_POST + postId);
  }
}
