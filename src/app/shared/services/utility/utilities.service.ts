import { Injectable } from '@angular/core';
import { GlobalResReq, ResponseItem } from '@app/shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  static mapResponseItem<T>(item: ResponseItem<T>, mapId?: boolean): T {
    const imageObj: any = {};
    if ((item.fields as any)?.image) {
      imageObj.image = (item.fields as any)?.image[0]?.url;
    }
    return {
      ...item.fields,
      ...((mapId && { id: item.id }) || {}),
      ...imageObj,
    };
  }

  static mapRequestItem<T>(item: Partial<T>, id?: string): GlobalResReq<T> {
    return {
      records: [
        {
          ...((id && { id }) || {}),
          fields: {
            ...(item as T),
            ...(((item as any).image && {
              image: [
                {
                  url: (item as any).image,
                },
              ],
            }) ||
              {}),
          },
        },
      ],
    };
  }
}
