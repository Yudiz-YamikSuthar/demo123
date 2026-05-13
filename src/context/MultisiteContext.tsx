import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SiteConfig, SITES, SHARED_CONTENT, SharedContent } from '../data/multisite';

type ViewMode = 'visitor' | 'admin';

interface MultisiteContextType {
  currentSiteId: string;
  currentSite: SiteConfig;
  setSite: (id: string) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  sharedContent: SharedContent;
  updateSharedContent: (content: SharedContent) => void;
  updateSiteContent: (siteId: string, content: Partial<SiteConfig>) => void;
}

const MultisiteContext = createContext<MultisiteContextType | undefined>(undefined);

export const MultisiteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSiteId, setCurrentSiteId] = useState<string>('brightonview');
  const [viewMode, setViewMode] = useState<ViewMode>('visitor');
  const [localSites, setLocalSites] = useState<Record<string, SiteConfig>>(SITES);
  const [localSharedContent, setLocalSharedContent] = useState<SharedContent>(SHARED_CONTENT);

  const setSite = (id: string) => {
    if (localSites[id]) {
      setCurrentSiteId(id);
    }
  };

  const updateSharedContent = (content: SharedContent) => {
    setLocalSharedContent(content);
  };

  const updateSiteContent = (siteId: string, content: Partial<SiteConfig>) => {
    setLocalSites(prev => ({
      ...prev,
      [siteId]: {
        ...prev[siteId],
        ...content,
      }
    }));
  };

  const value = {
    currentSiteId,
    currentSite: localSites[currentSiteId],
    setSite,
    viewMode,
    setViewMode,
    sharedContent: localSharedContent,
    updateSharedContent,
    updateSiteContent,
  };

  return (
    <MultisiteContext.Provider value={value}>
      {children}
    </MultisiteContext.Provider>
  );
};

export const useMultisite = () => {
  const context = useContext(MultisiteContext);
  if (context === undefined) {
    throw new Error('useMultisite must be used within a MultisiteProvider');
  }
  return context;
};
