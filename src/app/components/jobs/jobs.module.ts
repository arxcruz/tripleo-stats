import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SharedModule } from '../../modules/shared.module';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsTypeComponent } from './jobs-type/jobs-type.component';
import { JobsRunListComponent } from './jobs-run-list/jobs-run-list.component';
import { JobsViewComponent } from './jobs-view/jobs-view.component';

const jobsRoutes: Routes = [
    { path: 'jobs/:category_jobs', component: JobsListComponent,
        children: [
            { path: ':job_id', component: JobsViewComponent },
        ]},
];

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        SharedModule,
        RouterModule.forChild(jobsRoutes),
    ],
    declarations: [
        JobsListComponent,
        JobsTypeComponent,
        JobsRunListComponent,
        JobsViewComponent,
    ]
})
export class JobsModule { }
