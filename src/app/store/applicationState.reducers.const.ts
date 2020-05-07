import * as fromPost from './reducers/postReducer';
import { ApplicationState } from './applicationState';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
export const reducers: ActionReducerMap<ApplicationState> = {
    postState: fromPost.reducer,
};
export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];