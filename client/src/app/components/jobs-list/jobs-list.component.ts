import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

    isCollapsed = true;
    categories: any;
    job_type: {};

    constructor(private jobsService: JobsService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.categories = this.jobsService.getJobByCategory(
                +params['category_jobs']);
            this.job_type = this.jobsService.getJobTypeById(
                +params['category_jobs']);
        });
    }
}
