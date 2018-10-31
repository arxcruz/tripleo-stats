import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) { }

    getCategories() {
        return this.http.get(ConfigService.get('categories_api'));
    }
}
