import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { IProcess } from '../interfaces/Process';
import { getProcess, createProcess } from '../api/processService';

interface ProcessContextType {
  processes: IProcess[];
  addProcess: (process: IProcess) => void;
  updateProcess: (id: number, updatedProcess: Partial<IProcess>) => void;
  removeProcess: (id: number) => void;
}

const ProcessContext = createContext<ProcessContextType | undefined>(undefined);

export const ProcessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [processes, setProcesses] = useState<IProcess[]>([]);

  useEffect(() => {
    const fetchProcesses = async () => {
      const response = await getProcess();
      setProcesses(response.data);
    };
    fetchProcesses();
  }, []);

  const addProcess = async (process: IProcess) => {
    const response = await createProcess(process);
    setProcesses(prev => [...prev, response.data]);
  };

  const updateProcess = (id: number, updatedProcess: Partial<IProcess>) => 
    setProcesses(prev =>
      prev.map(proc => (proc.id === id ? { ...proc, ...updatedProcess } : proc))
    );

  const removeProcess = (id: number) =>
    setProcesses(prev => prev.filter(process => process.id !== id));

  return (
    <ProcessContext.Provider value={{ processes, addProcess, updateProcess, removeProcess }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const useProcessContext = () => {
  const context = useContext(ProcessContext);
  if (!context) throw new Error("Erro ao usar o Process Context :(");
  return context;
};
