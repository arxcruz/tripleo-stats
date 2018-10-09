import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jobs-category',
  templateUrl: './jobs-category.component.html',
  styleUrls: ['./jobs-category.component.css']
})
export class JobsCategoryComponent implements OnInit {

    @Input() category: string;

    constructor() { }

    ngOnInit() {

    }
}
