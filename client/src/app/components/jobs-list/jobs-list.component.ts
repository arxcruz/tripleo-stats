import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

    categories: any;

    constructor(private jobsService: JobsService) { }

    ngOnInit() {
        this.categories = this.jobsService.getJobByCategory(1);
    }
}
