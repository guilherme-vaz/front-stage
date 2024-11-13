import {IProcess } from "./Process";

export interface IArea {
  id: number;
  name: string;
  processes: IProcess[];
}