import { createContext, useContext } from "react";

interface ContextState {
  id: number;
  setId: (id: number) => void;
  isExtendedOpen: boolean;
  setIsExtendedOpen: (isOpen: boolean) => void;
}

export const ExtendedInfoContext = createContext({} as ContextState);
export const useExtendedInfoContext = () => useContext(ExtendedInfoContext);
