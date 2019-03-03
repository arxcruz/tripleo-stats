import { NgModule } from '@angular/core';
import { SortableHeaderDirective } from
    '../directives/sortable-header.directive';
import { ChartDashboardComponent} from
    '../components/chart-dashboard/chart-dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    imports: [
        NgxChartsModule,
    ],
    declarations: [
        ChartDashboardComponent,
        SortableHeaderDirective,
    ],
    exports: [
        ChartDashboardComponent,
        SortableHeaderDirective,
    ]
})
export class SharedModule {  }
