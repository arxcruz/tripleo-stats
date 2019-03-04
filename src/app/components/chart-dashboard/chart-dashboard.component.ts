import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    @Input() view = [400, 300];

    // pie
    showLabels = false;
    explodeSlices = false;
    doughnut = false;
    @Input() legendPosition = "below";

    types = ["today", "yesterday", "week", "overall"];

    chart_data: any;
    job_id: number;

    constructor(private chartService: ChartService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.job_id = +params['job_id'];
            this.load();
        });
    }

    titleCaseWord(word: string) {
        if(!word) {
            return word;
        }
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    private formatChartData(chart_data: any) {
        console.log(chart_data);
        for(var i in chart_data) {
            for(var x in chart_data[i].data) {
                var data = chart_data[i].data
                if(data[x].name) {
                    data[x].name = this.titleCaseWord(data[x].name);
                }
            }
        }
    }

    private load() {
        if(this.job_id) {
            this.chartService.getChartDataByJobId(this.job_id).subscribe(
                chart_data => {
                this.formatChartData(chart_data);
                this.chart_data = chart_data;
            }, error => {
                this.chart_data = [];
                console.error(
                    `There was an error loading chart data by id: ${error}`);
            })
        } else {
            this.chartService.getChartData().subscribe(chart_data => {
                this.formatChartData(chart_data);
                this.chart_data = chart_data;
            }, error => {
                this.chart_data = [];
                console.error(
                    `There was an error loading chart data: ${error}`);
            });
        }
    }
}
