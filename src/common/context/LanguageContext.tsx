"use client"

import React, { createContext, useState, useContext, useEffect, ReactNode, useMemo } from 'react';

interface LanguageContextType {
  language: string;
  translations: Record<string, string>;
  changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('pt');
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    import(`../locales/${language}/common.json`)
      .then((module) => setTranslations(module.default))
      .catch((err) => console.error('Erro ao carregar tradução:', err));
  }, [language]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

 
  const contextValue = useMemo(
    () => ({ language, translations, changeLanguage }),
    [language, translations] 
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};
