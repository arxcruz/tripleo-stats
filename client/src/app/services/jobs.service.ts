import { Injectable } from '@angular/core';
import { jobs_data } from './data';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

    private _data = jobs_data;

    constructor() { }

    getJobByCategory(category_id: number) {
        return this._data.find(jobs => {
            return jobs.category_id === category_id;
        });
    }
}
