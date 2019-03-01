import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsRunListComponent } from './jobs-run-list.component';

describe('JobsRunListComponent', () => {
  let component: JobsRunListComponent;
  let fixture: ComponentFixture<JobsRunListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsRunListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsRunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
