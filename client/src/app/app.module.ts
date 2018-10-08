import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ChartDashboardComponent
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
