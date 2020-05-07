import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreImplementationRoutingModule } from './store-implementation-routing.module';
import { SampleViewComponent } from './sample-view/sample-view.component';
import { SamplePushFormComponent } from './sample-view/sample-push-form/sample-push-form.component';
import { SampleGetFormComponent } from './sample-view/sample-get-form/sample-get-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatButtonModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SampleViewComponent, SamplePushFormComponent, SampleGetFormComponent],
  imports: [
    CommonModule,
    StoreImplementationRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule
  ]
})
export class StoreImplementationModule { }
