import { ISubProcess } from "./SubProcess";

export interface IProcess {
  id: number;
  name: string;
  details: string;
  tools: string[];
  responsible: string[];
  documentation: string[];
  subProcesses: ISubProcess[];
}