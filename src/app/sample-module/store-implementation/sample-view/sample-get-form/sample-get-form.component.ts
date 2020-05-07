import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/BaseComponent';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/applicationState';
import { takeUntil } from 'rxjs/operators';
import { IPost } from 'src/app/shared/interface/IPost';

@Component({
  selector: 'app-sample-get-form',
  templateUrl: './sample-get-form.component.html',
  styleUrls: ['./sample-get-form.component.scss']
})
export class SampleGetFormComponent extends BaseComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) {
    super();
  }
  postDetails: IPost[];
  displayedColumns: string[] = ['id', 'title', 'body'];
  ngOnInit() {
    this.getSavedPosts();
  }

  getSavedPosts() {
    this.store.pipe(select(o => o.postState.posts),
      takeUntil(this.destroyed$)).subscribe(data => {
        if (data) {
          this.postDetails = data;
        }
      });
  }
}
