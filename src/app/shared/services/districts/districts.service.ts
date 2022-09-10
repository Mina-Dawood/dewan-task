import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { District, GlobalResReq } from '@app/shared/interfaces';
import { API_CONFIG } from '@app/shared/constants';
import { UtilitiesService } from '..';

@Injectable({
  providedIn: 'root',
})
export class DistrictsService {
  originalItems!: District[];
  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<District[]> {
    const toData = (res: GlobalResReq<District>) => {
      this.originalItems = res.records.map((record) =>
        UtilitiesService.mapResponseItem(record)
      );
      return this.originalItems;
    };

    return this.http
      .get<GlobalResReq<District>>(API_CONFIG.DISTRICTS.GET_ITEMS)
      .pipe(map(toData));
  }

  getByCityId(cityId: number): District[] {
    return this.originalItems.filter((district) => district.cityId === cityId);
  }
}
