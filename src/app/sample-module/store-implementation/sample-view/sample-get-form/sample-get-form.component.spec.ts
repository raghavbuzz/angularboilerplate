import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleGetFormComponent } from './sample-get-form.component';

describe('SampleGetFormComponent', () => {
  let component: SampleGetFormComponent;
  let fixture: ComponentFixture<SampleGetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleGetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleGetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
