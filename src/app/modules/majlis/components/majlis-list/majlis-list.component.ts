import { Majlis, City, District } from '@app/shared/interfaces';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CitiesService,
  DistrictsService,
  MajlisService,
} from '@app/shared/services';
import { Status } from '@app/shared/enums';

@Component({
  selector: 'dewan-majlis-list',
  templateUrl: './majlis-list.component.html',
  styleUrls: ['./majlis-list.component.scss'],
})
export class MajlisListComponent implements OnInit, OnDestroy {
  majlisList$!: Observable<Majlis[]>;
  cities!: City[];
  districts!: District[];

  page: number = 1;
  pageSize: number = 4;

  getCityNameBounded!: Function;
  getDistrictNameBounded!: Function;

  STATUS = Status;

  private destroy$ = new Subject<void>();

  constructor(
    private readonly majlisService: MajlisService,
    private readonly citiesService: CitiesService,
    private readonly districtsService: DistrictsService
  ) {}

  ngOnInit(): void {
    this.setBoundedFunctions();
    this.loadCitiesList();
    this.loadDistrictsList();
  }

  openModal(): void {}

  private getCityName(cityId: number): string | undefined {
    return this.cities.find((city) => city.id === cityId)?.name;
  }

  private getDistrictName(districtId: number): string | undefined {
    return this.districts.find((district) => district.id === districtId)?.name;
  }

  private setBoundedFunctions(): void {
    this.getCityNameBounded = this.getCityName.bind(this);
    this.getDistrictNameBounded = this.getDistrictName.bind(this);
  }

  private checkAndLoadMajlis(): void {
    if (this.cities && this.districts) {
      this.loadMajlisList();
    }
  }

  private loadMajlisList(): void {
    this.majlisList$ = this.majlisService.getItems();
  }

  private loadCitiesList(): void {
    this.citiesService
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((cities) => {
        this.cities = cities;
        this.checkAndLoadMajlis();
      });
  }

  private loadDistrictsList(): void {
    this.districtsService
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((districts) => {
        this.districts = districts;
        this.checkAndLoadMajlis();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
