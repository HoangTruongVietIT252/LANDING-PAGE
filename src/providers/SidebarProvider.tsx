"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";

// Define the context type
interface SidebarContextType {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  toggleSidebar: () => void;
  toggleMobileMenu: () => void;
}

// Create the context with an initial value
const SidebarContext = createContext<SidebarContextType>({
  sidebarOpen: true,
  setSidebarOpen: () => {},
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
  toggleSidebar: () => {},
  toggleMobileMenu: () => {},
});

// Create the provider component
export function SidebarProvider({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // Value to be provided to consumers
  const value: SidebarContextType = {
    sidebarOpen,
    setSidebarOpen,
    mobileMenuOpen,
    setMobileMenuOpen,
    toggleSidebar,
    toggleMobileMenu,
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

// Custom hook for using the sidebar context
export function useSidebar(): SidebarContextType {
  const context = useContext(SidebarContext);
  return context;
}
