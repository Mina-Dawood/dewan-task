import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City, GlobalResReq } from '@app/shared/interfaces';
import { API_CONFIG } from '@app/shared/constants';
import { UtilitiesService } from '..';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<City[]> {
    const toData = (res: GlobalResReq<City>) => {
      return res.records.map((record) =>
        UtilitiesService.mapResponseItem(record)
      );
    };

    return this.http
      .get<GlobalResReq<City>>(API_CONFIG.CITIES.GET_ITEMS)
      .pipe(map(toData));
  }
}
