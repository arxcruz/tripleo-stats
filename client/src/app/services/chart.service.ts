import { Injectable } from '@angular/core';
import { chart_data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

    private _data = chart_data;

    constructor() { }

    getStatus(status_type: string) {
        return this._data.find(stat => {
            return stat.status_type === status_type;
        });
    }
}
