import { Status } from "../enums";

export interface Majlis {
  id: string;
  name: string;
  cityId: number;
  distinctId: number;
  status: Status;
  image?: string;
}
