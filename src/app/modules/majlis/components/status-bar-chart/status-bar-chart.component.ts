import { Majlis } from '@app/shared/interfaces';
import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MajlisService } from '@app/shared/services';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Status } from '@app/shared/enums';

@Component({
  selector: 'dewan-status-bar-chart',
  templateUrl: './status-bar-chart.component.html',
  styleUrls: ['./status-bar-chart.component.scss'],
})
export class StatusBarChartComponent implements OnInit, OnDestroy {
  chartData!: ChartDataSets[];
  chartLabels = ['Available', 'Unavailable'];
  chartOptions!: ChartOptions;
  destroy$ = new Subject<void>();

  constructor(private readonly majlisService: MajlisService) {}

  ngOnInit(): void {
    this.setChartDataSet();
    this.setChartOptions();
    this.majlisService
      .getListChangedSubject()
      .pipe(takeUntil(this.destroy$))
      .subscribe((list) => this.setData(list));
  }

  private setData(list: Majlis[]): void {
    const availableCount = this.getStatusCount(Status.available, list);
    const unavailableCount = this.getStatusCount(Status.unavailable, list);
    this.chartData[0].data = [availableCount, unavailableCount];
  }

  private getStatusCount(status: Status, list: Majlis[]): number {
    return list.filter((majlis) => majlis.status === status).length;
  }

  private setChartDataSet(): void {
    this.chartData = [
      {
        label: 'Majlis Status Chart',
        data: [16, 2],
        backgroundColor: ['rgba(75, 192, 192, 0.4)', 'rgba(255, 99, 132, 0.4)'],
        borderColor: ['rgba(75, 192, 192, 0.4)', 'rgba(255, 99, 132, 0.4)'],
        hoverBorderColor: [
          'rgba(75, 192, 192, 0.4)',
          'rgba(255, 99, 132, 0.4)',
        ],
        hoverBackgroundColor: [
          'rgba(75, 192, 192, 0.4)',
          'rgba(255, 99, 132, 0.4)',
        ],
        borderWidth: 1,
      },
    ];
  }

  private setChartOptions(): void {
    this.chartOptions = {
      responsive: true,
      scales: this.getScales(),
    };
  }

  private getScales(): Chart.ChartScales {
    return {
      yAxes: [
        {
          display: true,
          stacked: true,
          hoverBackgroundColor: 'transparent',
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 6,
          },
        } as any,
      ],
      xAxes: [
        {
          display: true,
          barPercentage: 0.5,
          gridLines: {
            display: false,
            borderDash: [],
          },
          ticks: {
            padding: 8,
          },
        } as any,
      ],
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
