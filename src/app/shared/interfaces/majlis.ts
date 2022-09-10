import { Status } from '../enums';

export interface Majlis {
  id: string;
  name: string;
  cityId: number;
  districtId: number;
  status: Status;
  image?: string;
}
