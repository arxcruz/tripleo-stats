import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';
import { jobs_data, job_types } from './data';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

    private _data = jobs_data;

    constructor(private http: HttpClient) { }

    getJobTypes() {
        return job_types;
    }

    getJobTypeById(job_type_id: number) {
        return job_types.find(job_type => {
            return job_type.job_id == job_type_id;
        });
    }

    getJobByCategory(category_id: number) {
        return this.http.get(ConfigService.get('jobs_api') + category_id);
    }
}
