import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Majlis, GlobalResponse } from '@app/shared/interfaces';
import { API_CONFIG } from '@app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class MajlisService {
  private originalItems!: Majlis[];

  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<Majlis[]> {
    if (this.originalItems) {
      return of(this.originalItems);
    }

    const toData = (res: GlobalResponse<Majlis>) => {
      this.originalItems = res?.data as Majlis[];
      return this.originalItems;
    };
    return this.http
      .get<GlobalResponse<Majlis>>(API_CONFIG.MAJLIS.GET_ITEMS)
      .pipe(map(toData));
  }

  getItemById(id: string): Observable<Majlis> {
    const toData = (res: GlobalResponse<Majlis>) => res.data as Majlis;
    return this.http
      .get<GlobalResponse<Majlis>>(`${API_CONFIG.MAJLIS.GET_ITEMS}/${id}`)
      .pipe(map(toData));
  }
}
