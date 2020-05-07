import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { PostState } from '../interfaces/postState';
import { PostService } from 'src/app/shared/services/post.service';
import { IPost } from 'src/app/shared/interface/IPost';
import { switchMap, map, combineLatest } from 'rxjs/operators';
import { createPostSuccess, createPost } from '../actions/postAction';
import { Observable, of } from 'rxjs';


@Injectable()
export class PostEffects {

    constructor(
        private actions$: Actions,
        private store: Store<PostState>, private postService: PostService) { }
    @Effect()
    CreatePostAction$: Observable<Action> = this.actions$.pipe(
        ofType(createPost),
        switchMap((element) => {
            this.postService.createPost(element.post).subscribe(
                data => {
                    if (data && data !== null) {
                        alert('Post created successfully.');
                        this.store.dispatch(createPostSuccess({ post: data }));
                    }
                },
                error=>{
                    alert(`Error: ${error}`);
                }
            );
            return of({
                type: 'NO_ACTION'
            });
        })
    );
}
