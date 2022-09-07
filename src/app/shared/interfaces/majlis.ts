import { Status } from "../enums";

export interface Majlis {
  id: number;
  name: string;
  cityId: number;
  distinctId: number;
  status: Status;
  image: string;
}
