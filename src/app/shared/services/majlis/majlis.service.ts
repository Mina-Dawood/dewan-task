import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalResReq, Majlis } from '@app/shared/interfaces';
import { API_CONFIG } from '@app/shared/constants';
import { UtilitiesService } from '..';

@Injectable({
  providedIn: 'root',
})
export class MajlisService {
  constructor(private readonly http: HttpClient) {}

  getItems(): Observable<Majlis[]> {
    const toData = (res: GlobalResReq<Majlis>) => {
      return res.records
        .sort((a, b) => (a.fields.id < b.fields.id ? 1 : -1))
        .map((record) => UtilitiesService.mapResponseItem(record, true));
    };

    return this.http
      .get<GlobalResReq<Majlis>>(API_CONFIG.MAJLIS.GET_ITEMS)
      .pipe(map(toData));
  }

  addNewMajlis(body: Partial<Majlis>): Observable<Majlis> {
    const payload = UtilitiesService.mapRequestItem(body);
    return this.http
      .post<GlobalResReq<Majlis>>(API_CONFIG.MAJLIS.GET_ITEMS, payload)
      .pipe(
        map((res) => UtilitiesService.mapResponseItem(res.records[0], true))
      );
  }

  updateMajlis(id: string, body: Partial<Majlis>): Observable<Majlis> {
    const payload = UtilitiesService.mapRequestItem(body);
    return this.http
      .patch<GlobalResReq<Majlis>>(
        `${API_CONFIG.MAJLIS.GET_ITEMS}/${id}`,
        payload
      )
      .pipe(
        map((res) => UtilitiesService.mapResponseItem(res.records[0], true))
      );
  }

  deleteMajlis(id: string): Observable<any> {
    return this.http.delete<any>(`${API_CONFIG.MAJLIS.GET_ITEMS}/${id}`);
  }
}
