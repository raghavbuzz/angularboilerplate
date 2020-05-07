import {OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';


export class BaseComponent implements OnDestroy {
    protected destroyed$ = new Subject();
    ngOnDestroy() {
      this.destroyed$.next();
      this.destroyed$.complete();
    }
  }