import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

    constructor(private http: HttpClient) { }

    getChartData() {
        return this.http.get(ConfigService.get('chart_api'));
    }
}
