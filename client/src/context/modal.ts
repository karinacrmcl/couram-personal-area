import { createContext, ReactNode, useContext } from "react";

type ContextState = {
  content: ReactNode | null | undefined;
  setContent: (content: ReactNode) => void;
};

export const ModalContext = createContext({} as ContextState);
export const useModalContext = () => useContext(ModalContext);
