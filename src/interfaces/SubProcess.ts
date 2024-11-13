export interface ISubProcess {
    id: number;
    name: string;
    details: string;
    tools: string[];
    responsible: string[];
    documentation: string[];
    status: "Active" | "Paused" | "Completed";
    subProcesses?: ISubProcess[];
}