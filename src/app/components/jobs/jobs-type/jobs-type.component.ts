import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jobs-type',
  templateUrl: './jobs-type.component.html',
  styleUrls: ['./jobs-type.component.css']
})
export class JobsTypeComponent implements OnInit {

    @Input() job_type: string;

    constructor() { }

    ngOnInit() {

    }
}
