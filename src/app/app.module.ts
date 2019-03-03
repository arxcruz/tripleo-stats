import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultComponent } from './components/default/default.component';
import { JobCategoryButtonsComponent } from './components/job-category-buttons/job-category-buttons.component';
import { JobsModule } from './components/jobs/jobs.module';
import { SharedModule } from './modules/shared.module';
import { ChartDashboardComponent } from './components/chart-dashboard/chart-dashboard.component';

const appRoutes: Routes = [
    { path: 'main', component: DefaultComponent},
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DefaultComponent,
        JobCategoryButtonsComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        JobsModule,
        NgbModule,
        RouterModule.forRoot(appRoutes),
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
