import { Majlis, City, District } from '@app/shared/interfaces';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  CitiesService,
  DistrictsService,
  MajlisService,
} from '@app/shared/services';

@Component({
  selector: 'dewan-majlis-list',
  templateUrl: './majlis-list.component.html',
  styleUrls: ['./majlis-list.component.scss'],
})
export class MajlisListComponent implements OnInit {
  majlisList$!: Observable<Majlis[]>;
  cities$!: Observable<City[]>;
  districts$!: Observable<District[]>;

  page: number = 1;
  pageSize: number = 4;

  constructor(
    private readonly majlisService: MajlisService,
    private readonly citiesService: CitiesService,
    private readonly districtsService: DistrictsService
  ) {}

  ngOnInit(): void {
    this.majlisList$ = this.majlisService.getItems();
    this.cities$ = this.citiesService.getItems();
    this.districts$ = this.districtsService.getItems();
  }

  openModal(): void {}
}
