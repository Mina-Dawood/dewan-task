import { Majlis, City } from '@app/shared/interfaces';
import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CitiesService, MajlisService } from '@app/shared/services';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'dewan-city-pie-chart',
  templateUrl: './city-pie-chart.component.html',
  styleUrls: ['./city-pie-chart.component.scss'],
})
export class CityPieChartComponent implements OnInit, OnDestroy {
  pieChartOptions!: ChartOptions;
  pieChartLabels!: Label[];
  pieChartData!: SingleDataSet;
  pieChartType!: ChartType;
  pieChartLegend!: boolean;
  pieChartPlugins = [];
  pieChartColors: any[] = [];

  private destroy$ = new Subject<void>();
  private citiesList!: City[];

  constructor(
    private readonly majlisService: MajlisService,
    private readonly citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    this.setChartOptions();
    this.majlisService
      .getListChangedSubject()
      .pipe(takeUntil(this.destroy$))
      .subscribe((list) => this.setData(list));
  }

  private setData(list: Majlis[]): void {
    this.pieChartData = [];

    if (!this.citiesList) {
      this.citiesService
        .getItems()
        .pipe(takeUntil(this.destroy$))
        .subscribe((cities) => {
          this.citiesList = cities;
          this.pieChartLabels = cities.map((city) => city.name);
          this.pieChartData = cities.map((city) =>
            this.getMajlisCount(city.id, list)
          );
        });
    } else {
      this.pieChartLabels = this.citiesList.map((city) => city.name);
      this.pieChartData = this.citiesList.map((city) =>
        this.getMajlisCount(city.id, list)
      );
    }
  }

  private getMajlisCount(cityId: number, list: Majlis[]): number {
    return list.filter((majlis) => majlis.cityId === cityId).length;
  }

  private setChartOptions(): void {
    this.pieChartOptions = this.createOptions();
    this.pieChartType = 'pie';
    this.pieChartLegend = true;
    this.pieChartColors = [
      {
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'white',
          'orange',
          'aqua',
        ],
      },
    ];
  }

  private createOptions(): ChartOptions {
    return {
      responsive: true,
      maintainAspectRatio: true,
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
