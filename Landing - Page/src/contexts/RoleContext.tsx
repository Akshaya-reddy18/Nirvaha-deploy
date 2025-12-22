
import React, { createContext, useContext, useState, ReactNode } from 'react';

type RoleContextType = {
  currentRole: 'doctor' | 'hr';
  setCurrentRole: (role: 'doctor' | 'hr') => void;
};

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [currentRole, setCurrentRole] = useState<'doctor' | 'hr'>('doctor');

  return (
    <RoleContext.Provider value={{ currentRole, setCurrentRole }}>
      {children}
    </RoleContext.Provider>
  );
};
