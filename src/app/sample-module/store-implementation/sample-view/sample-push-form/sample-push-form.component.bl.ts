import { Subject } from 'rxjs';
import { createPost } from 'src/app/store/actions/postAction';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/applicationState';
import { IPost } from 'src/app/shared/interface/IPost';

export class SamplePushFormComponentBL {

    constructor(private store: Store<ApplicationState>) {

    }

    createPost(post: IPost) {
        this.store.dispatch(createPost({
            post: post
        }));
    }

}