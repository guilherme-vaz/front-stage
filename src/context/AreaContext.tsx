import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Area } from '../interfaces/Area';

interface AreaContextType {
  areas: Area[];
  addArea: (area: Area) => void;
  removeArea: (id: number) => void;
  updateArea: (id: number, updatedArea: Area) => void;
}

const AreaContext = createContext<AreaContextType | undefined>(undefined);

export const AreaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [areas, setAreas] = useState<Area[]>([]);

  const addArea = (area: Area) => setAreas(prev => [...prev, area]);

  const removeArea = (id: number) =>
    setAreas(prev => prev.filter(area => area.id !== id));

  const updateArea = (id: number, updatedArea: Area) =>
    setAreas(prev =>
      prev.map(area => (area.id === id ? { ...area, ...updatedArea } : area))
    );

  return (
    <AreaContext.Provider value={{ areas, addArea, removeArea, updateArea }}>
      {children}
    </AreaContext.Provider>
  );
};

export const useAreaContext = () => {
  const context = useContext(AreaContext);
  if (!context) throw new Error("useAreaContext must be used within an AreaProvider");
  return context;
};
