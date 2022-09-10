import { Injectable } from '@angular/core';
import { GlobalResReq, ResponseItem } from '@app/shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  static mapResponseItem<T>(item: ResponseItem<T>): T {
    return { ...item.fields, id: item.id };
  }

  static mapRequestItem<T>(item: Partial<T>): GlobalResReq<T> {
    return {
      records: [
        {
          fields: item as T,
        },
      ],
    };
  }
}
