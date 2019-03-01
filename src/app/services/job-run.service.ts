import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class JobRunService {

    constructor(private http: HttpClient) { }

    getJobRunByJobId(job_id: number) {
        return this.http.get(ConfigService.get('job_run_api') + job_id);
    }
}
