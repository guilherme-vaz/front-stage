import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Process } from '../interfaces/Process';

// Interface para definir os métodos e estado do contexto
interface ProcessContextType {
  processes: Process[];
  addProcess: (process: Process) => void;
  updateProcess: (id: number, updatedProcess: Partial<Process>) => void;
  removeProcess: (id: number) => void;
}

const ProcessContext = createContext<ProcessContextType | undefined>(undefined);

export const ProcessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [processes, setProcesses] = useState<Process[]>([]);

  // Função para adicionar um novo processo
  const addProcess = (process: Process) => {
    setProcesses(prev => [...prev, process]);
  };

  // Função para atualizar um processo existente
  const updateProcess = (id: number, updatedProcess: Partial<Process>) => {}
