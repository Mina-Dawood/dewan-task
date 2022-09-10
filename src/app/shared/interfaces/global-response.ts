import { ResponseItem } from '.';

export interface GlobalResReq<T> {
  records: ResponseItem<T>[];
}
