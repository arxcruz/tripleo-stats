import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { JobRunService } from '../../../services/job-run.service';
import { JobsService } from '../../../services/jobs.service';

@Component({
  selector: 'app-jobs-run-list',
  templateUrl: './jobs-run-list.component.html',
  styleUrls: ['./jobs-run-list.component.css']
})
export class JobsRunListComponent implements OnInit {

    job_id: number;
    jobs: any;
    slicedJobRuns: any;
    job_name: string;

    page = 1;

    constructor(private jobRunService: JobRunService,
                private jobsService: JobsService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        console.log('Sliced: ' + this.slicedJobRuns);
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

    pageChangedEvent() {
        console.log('Page changed ' + this.page);
        console.log('Sliced jobs: ' + this.slicedJobRuns);
        this.slicedJobRuns = this.jobs.slice(
            (this.page-1) * 10, (this.page-1) * 10 + 10);
    }
}
