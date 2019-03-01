import { Component, OnInit } from '@angular/core';

import { CategoryService} from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'TripleO Stats';
    categories: any;

    constructor(private categoryService: CategoryService) {

    }

    ngOnInit() {
        this.load();
    }

    private load() {
        this.categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
        }, error => {
            this.categories = [];
            console.error(`There was an error loading chart data: ${error}`);
        });
    }
}
