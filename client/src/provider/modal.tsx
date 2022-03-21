import React, { ReactNode, useState, useCallback } from "react";
import { ModalContext } from "../context/modal";
import { ModalBackground } from "../shared/components/modal";

type Props = {
  children: ReactNode;
};

export default function ModalProvider({ children }: Props) {
  const [content, setContent] = useState<ReactNode>(null);

  const setContentHandler = (content: ReactNode) => {
    setContent(content);
  };

  return (
    <ModalContext.Provider value={{ content, setContent: setContentHandler }}>
      {content ? <ModalBackground>{content}</ModalBackground> : null}
      {children}
    </ModalContext.Provider>
  );
}
