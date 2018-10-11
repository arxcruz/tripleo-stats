import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartDashboardComponent } from './components/chart-dashboard/chart-dashboard.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsCategoryComponent } from './components/jobs-category/jobs-category.component';
import { DefaultComponent } from './components/default/default.component';
import { JobCategoryButtonsComponent } from './components/job-category-buttons/job-category-buttons.component';

const appRoutes = [
    { path: 'main', component: DefaultComponent},
    { path: 'jobs/:category_jobs', component: JobsListComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ChartDashboardComponent,
        JobsListComponent,
        JobsCategoryComponent,
        DefaultComponent,
        JobCategoryButtonsComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        NgbModule,
        NgxChartsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
