import { createContext, ReactNode, useContext } from "react";

type Content = {
  content: ReactNode | null | undefined;
};

type ContextState = {
  content: Content["content"];
  setContent: (content: Content["content"]) => void;
};

export const ModalContext = createContext({} as ContextState);
export const useModalContext = () => useContext(ModalContext);
