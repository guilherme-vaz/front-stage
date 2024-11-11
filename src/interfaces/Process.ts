export interface Process {
    id: number;
    name: string;
    tools?: string[];
    responsible?: string[];
    areaId: number;  
  }