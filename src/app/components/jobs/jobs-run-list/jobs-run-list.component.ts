import { Component, OnInit, Input,
         QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { JobRunService } from '../../../services/job-run.service';
import { JobsService } from '../../../services/jobs.service';
import { SortableHeaderDirective,
         SortEvent,
         compare } from '../../../directives/sortable-header.directive';

@Component({
  selector: 'jobs-run-list',
  templateUrl: './jobs-run-list.component.html',
  styleUrls: ['./jobs-run-list.component.css']
})
export class JobsRunListComponent implements OnInit {

    @Input() job_id: number;
    jobs: any = [];
    slicedJobRuns: any;
    job_name: string;

    page = 1;

    @ViewChildren(SortableHeaderDirective) headers: QueryList<
        SortableHeaderDirective>;

    constructor(private jobRunService: JobRunService,
                private jobsService: JobsService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.job_id = +params['job_id'];
            this.load();
        });
    }

    private load() {
        this.jobRunService.getJobRunByJobId(this.job_id).subscribe(jobs => {
            this.jobs = jobs;
            this.slicedJobRuns = this.jobs.slice(0, 10);
        }, error => {
            console.error(`There was an error loading job run data: ${error}`);
        });

        this.jobsService.getJobById(this.job_id).subscribe((job : any) => {
            this.job_name = job.name;
        }, error => {
            console.error(`There was an error loading job data: ${error}`);
        })
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach(header => {
            if(header.sortable !== column) {
                header.direction = '';
            }
        });

        if(direction !== '') {
            this.jobs = [...this.jobs].sort((a, b) => {
                const res = compare(a[column], b[column]);
                return direction === 'asc' ? res : -res;
            });
            this.slicedJobRuns = this.jobs.slice(
            (this.page-1) * 10, (this.page-1) * 10 + 10);
        }
    }

    pageChangedEvent() {
        this.slicedJobRuns = this.jobs.slice(
            (this.page-1) * 10, (this.page-1) * 10 + 10);
    }
}
