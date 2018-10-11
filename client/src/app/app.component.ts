import { Component, OnInit } from '@angular/core';

import { JobsService } from './services/jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'TripleO Stats';
    job_types: any;

    constructor(private jobsService: JobsService) {

    }

    ngOnInit() {
        this.job_types = this.jobsService.getJobTypes();
    }
}
