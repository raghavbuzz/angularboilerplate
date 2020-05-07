import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/BaseComponent';
import { Store } from '@ngrx/store';
import { SamplePushFormComponentBL } from './sample-push-form.component.bl';
import { ApplicationState } from 'src/app/store/applicationState';
import { IPost } from 'src/app/shared/interface/IPost';

@Component({
  selector: 'app-sample-push-form',
  templateUrl: './sample-push-form.component.html',
  styleUrls: ['./sample-push-form.component.scss']
})
export class SamplePushFormComponent extends BaseComponent {

  pushFormBAL: SamplePushFormComponentBL;
  post: IPost = {userId:1} as IPost;
  constructor(private store: Store<ApplicationState>) {
    super();
    this.pushFormBAL = new SamplePushFormComponentBL(this.store);
  }
  createPost() {
    this.pushFormBAL.createPost(this.post);
  }
}
