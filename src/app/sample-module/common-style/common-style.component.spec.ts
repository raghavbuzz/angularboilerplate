import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStyleComponent } from './common-style.component';

describe('CommonStyleComponent', () => {
  let component: CommonStyleComponent;
  let fixture: ComponentFixture<CommonStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
