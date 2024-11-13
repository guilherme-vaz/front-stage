import { createContext, useContext, useState, ReactNode } from 'react';
import { IArea } from '../interfaces/Area';
import { IProcess } from '../interfaces/Process';
import { ISubProcess } from '../interfaces/SubProcess';

// Mockando dados
const mockAreas: IArea[] = [
  {
    id: 1,
    name: "Área de Pessoas",
    processes: [
      {
        id: 1,
        name: "Recrutamento e Seleção",
        details: "Processo de contratação de novos funcionários",
        tools: ["Trello", "Notion"],
        responsible: ["Equipe de Recrutamento"],
        documentation: ["Fluxo de recrutamento", "Guias de entrevista"],
        subProcesses: [
          { id: 1, name: "Definição de perfil da vaga", details: "Identificação dos requisitos", tools: ["Notion"], responsible: ["HR"], documentation: [], status: "Active" },
          { id: 2, name: "Divulgação da vaga", details: "Publicação nos canais", tools: ["LinkedIn"], responsible: ["HR"], documentation: [], status: "Active" },
        ],
      },
    ],
  },
];

interface AreaContextType {
  areas: IArea[];
  addArea: (name: string) => void;
  addProcess: (areaId: number, process: IProcess) => void;
  addSubProcess: (areaId: number, processId: number, subProcess: ISubProcess) => void;
}

const AreaContext = createContext<AreaContextType | undefined>(undefined);

export const AreaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [areas, setAreas] = useState<IArea[]>(mockAreas);

  const addArea = (name: string) => {
    const newArea: IArea = {
      id: Date.now(),
      name,
      processes: [],
    };
    setAreas(prev => [...prev, newArea]); 
  };

  const addProcess = (areaId: number, process: IProcess) => {
    setAreas(prev =>
      prev.map(area =>
        area.id === areaId
          ? { ...area, processes: [...area.processes, { ...process, id: Date.now(), subProcesses: [] }] }
          : area
      )
    );
  };

  const addSubProcess = (areaId: number, processId: number, subProcess: ISubProcess) => {
    setAreas(prev =>
      prev.map(area =>
        area.id === areaId
          ? {
              ...area,
              processes: area.processes.map(process =>
                process.id === processId
                  ? { ...process, subProcesses: [...process.subProcesses, { ...subProcess, id: Date.now() }] }
                  : process
              ),
            }
          : area
      )
    );
  };

  return (
    <AreaContext.Provider value={{ areas, addArea, addProcess, addSubProcess }}>
      {children}
    </AreaContext.Provider>
  );
};

export const useAreaContext = () => {
  const context = useContext(AreaContext);
  if (!context) throw new Error("Erro no Area Context :(");
  return context;
};
