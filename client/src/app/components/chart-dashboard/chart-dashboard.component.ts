import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';

@Component({
    selector: 'chart-dashboard',
    templateUrl: './chart-dashboard.component.html',
    styleUrls: ['./chart-dashboard.component.css']
})
export class ChartDashboardComponent implements OnInit {
    // options
    showLegend = true;

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    view: any[] = [500, 300];
    // pie
    showLabels = true;
    explodeSlices = false;
    doughnut = false;

    types = ["today", "yesterday", "week", "overall"];

    chart_data: any;

    constructor(private chartService: ChartService) {
    }

    ngOnInit() {
        this.load();
    }

    private load() {
        this.chartService.getChartData().subscribe(chart_data => {
            this.chart_data = chart_data;
            console.log(this.chart_data);
        }, error => {
            this.chart_data = [];
            console.error(`There was an error loading chart data: ${error}`);
        });
    }
}
