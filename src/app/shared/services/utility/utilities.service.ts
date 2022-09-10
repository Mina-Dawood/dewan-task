import { Injectable } from '@angular/core';
import { GlobalResReq, ResponseItem } from '@app/shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  static mapResponseItem<T>(item: ResponseItem<T>): T {
    const imageObj: any = {};
    if ((item.fields as any)?.image) {
      imageObj.image = (item.fields as any)?.image[0]?.url;
    }
    return { ...item.fields, id: item.id, ...imageObj };
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
