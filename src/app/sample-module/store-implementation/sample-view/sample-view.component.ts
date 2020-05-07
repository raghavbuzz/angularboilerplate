import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/BaseComponent';

@Component({
  selector: 'app-sample-view',
  templateUrl: './sample-view.component.html',
  styleUrls: ['./sample-view.component.scss']
})
export class SampleViewComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
