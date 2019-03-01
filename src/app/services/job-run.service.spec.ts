import { TestBed } from '@angular/core/testing';

import { JobRunService } from './job-run.service';

describe('JobRunService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobRunService = TestBed.get(JobRunService);
    expect(service).toBeTruthy();
  });
});
