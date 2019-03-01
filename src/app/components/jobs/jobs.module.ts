import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsTypeComponent } from './jobs-type/jobs-type.component';
import { JobsRunListComponent } from './jobs-run-list/jobs-run-list.component';

const jobsRoutes: Routes = [
    { path: 'jobs/:category_jobs', component: JobsListComponent,
        children: [
            { path: ':job_id', component: JobsRunListComponent }
        ]},
];

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild(jobsRoutes)
    ],
    declarations: [
        JobsListComponent,
        JobsTypeComponent,
        JobsRunListComponent
    ]
})
export class JobsModule { }
