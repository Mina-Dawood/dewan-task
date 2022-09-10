import { Majlis } from '@app/shared/interfaces';
import { Observable, of } from 'rxjs';
import { Status } from '../enums';

export const ITEMS_MOCK: Majlis[] = [
  {
    id: 'rec0L61fzbWba55wL1',
    name: 'Abu Dhabi city majlis',
    cityId: 1,
    distinctId: 1,
    status: Status.available,
  },
  {
    id: 'rec0L61fzbWba55wL2',
    name: 'Albateen majlis',
    cityId: 1,
    distinctId: 2,
    status: Status.unavailable,
  },
  {
    id: 'rec0L61fzbWba55wL3',
    name: 'Majlis Almushrif',
    cityId: 1,
    distinctId: 1,
    status: Status.available,
  },
  {
    id: 'rec0L61fzbWba55wL4',
    name: 'Al Ain Majlis',
    cityId: 2,
    distinctId: 1,
    status: Status.available,
  },
  {
    id: 'rec0L61fzbWba55wL5',
    name: 'Ras Al khaima Majlis',
    cityId: 1,
    distinctId: 1,
    status: Status.unavailable,
  },
  {
    id: 'rec0L61fzbWba55wL6',
    name: 'Albateen majlis',
    cityId: 3,
    distinctId: 2,
    status: Status.unavailable,
  },
  {
    id: 'rec0L61fzbWba55wL7',
    name: 'Majlis Almushrif',
    cityId: 3,
    distinctId: 1,
    status: Status.available,
  },
  {
    id: 'rec0L61fzbWba55wL8',
    name: 'Al Ain Majlis',
    cityId: 1,
    distinctId: 1,
    status: Status.unavailable,
  },
  {
    id: 'rec0L61fzbWba55wL9',
    name: 'Abu Dhabi city majlis',
    cityId: 1,
    distinctId: 3,
    status: Status.available,
  },
  {
    id: 'rec0L61fzbWba55wL10',
    name: 'Dubai Majlis',
    cityId: 3,
    distinctId: 1,
    status: Status.unavailable,
  },
];

export class MajlisServiceMock {
  private originalItems: Majlis[] = ITEMS_MOCK;

  getItems(): Observable<Majlis[]> {
    return of(this.originalItems);
  }
}
