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

const appRoutes = [
    { path: 'jobs', component: ChartDashboardComponent },
    { path: '', redirectTo: '' }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ChartDashboardComponent,
        JobsListComponent,
        JobsCategoryComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        NgbModule,
        NgxChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
