import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'job-category-buttons',
  templateUrl: './job-category-buttons.component.html',
  styleUrls: ['./job-category-buttons.component.css']
})
export class JobCategoryButtonsComponent implements OnInit {

    @Input() categories : any;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    btnClick(category_id: number) {
        this.router.navigate(['/jobs/' + category_id]);
    }
}
