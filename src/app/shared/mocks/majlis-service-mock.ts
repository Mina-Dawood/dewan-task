import { Majlis } from '@app/shared/interfaces';
import { Observable, of } from 'rxjs';
import { Status } from '../enums';

export const ITEMS_MOCK: Majlis[] = [
  {
    id: 1,
    name: 'Abu Dhabi city majlis',
    cityId: 1,
    distinctId: 1,
    status: Status.available,
    image: '16425642989.1897643545582069',
  },
];

export class MajlisServiceMock {
  private originalItems: Majlis[] = ITEMS_MOCK;

  getItems(): Observable<Majlis[]> {
    return of(this.originalItems);
  }

  getItemById(id: number): Observable<Majlis> {
    return of(
      this.originalItems.find(
        (majlis) => majlis.id === id
      ) as Majlis
    );
  }
}
