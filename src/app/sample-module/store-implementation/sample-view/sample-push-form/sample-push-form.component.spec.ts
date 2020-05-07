import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePushFormComponent } from './sample-push-form.component';

describe('SamplePushFormComponent', () => {
  let component: SamplePushFormComponent;
  let fixture: ComponentFixture<SamplePushFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePushFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePushFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
