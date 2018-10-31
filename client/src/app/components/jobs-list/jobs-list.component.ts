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
    jobs_by_category: any;

    constructor(private jobsService: JobsService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.load(+params['category_jobs']);
        });
    }

    private load(category_id) {
        this.jobsService.getJobByCategory(category_id).subscribe(
            jobs_by_category => {
                this.jobs_by_category = jobs_by_category;
            }, error => {
                this.jobs_by_category = [];
                console.error(
                    `There was an error loading chart data: ${error}`);
            });
    }
}
