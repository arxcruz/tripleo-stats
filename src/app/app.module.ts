import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartDashboardComponent } from './components/chart-dashboard/chart-dashboard.component';
import { DefaultComponent } from './components/default/default.component';
import { JobCategoryButtonsComponent } from './components/job-category-buttons/job-category-buttons.component';
import { JobsModule } from './components/jobs/jobs.module';

const appRoutes: Routes = [
    { path: 'main', component: DefaultComponent},
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ChartDashboardComponent,
        DefaultComponent,
        JobCategoryButtonsComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        JobsModule,
        NgbModule,
        NgxChartsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
