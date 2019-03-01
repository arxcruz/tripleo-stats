import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCategoryButtonsComponent } from './job-category-buttons.component';

describe('JobCategoryButtonsComponent', () => {
  let component: JobCategoryButtonsComponent;
  let fixture: ComponentFixture<JobCategoryButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCategoryButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCategoryButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
