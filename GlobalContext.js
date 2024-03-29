"use client"
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  return (
    <GlobalContext.Provider value={{ isSideMenuOpen, setIsSideMenuOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};
