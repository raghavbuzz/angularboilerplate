import { Action, createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/shared/interface/IPost';

const CREATE_POST_ACTION = 'CREATE_POST_ACTION';
const CREATE_POST_ACTION_SUCCESS = 'CREATE_POST_ACTION_SUCCESS';

export const createPost = createAction(CREATE_POST_ACTION,
    props<{ post: IPost }>());

export const createPostSuccess = createAction(CREATE_POST_ACTION_SUCCESS,
    props<{ post: IPost }>());
