import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

    private _data = data;

    constructor() { }

    getStatus(status_type: string) {
        return this._data.find(stat => {
            return stat.status_type === status_type;
        });
    }
}
