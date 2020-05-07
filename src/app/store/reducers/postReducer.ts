import { createPostSuccess } from '../actions/postAction';
import { PostState } from '../interfaces/postState';
import { on, createReducer, Action } from '@ngrx/store';

const initialState: PostState = {
    posts: []
};
const featureReducer = createReducer(
    initialState,
    on(
        createPostSuccess,
        (state, action) => ({
            ...state,
            posts: state.posts.concat(action.post)
        })
    ),
);

export function reducer(state: PostState | undefined, action: Action) {
    return featureReducer(state, action);
}