import React, { ReactNode, useState } from "react";
import { ModalContext } from "../context/modal";
import { ModalBackground } from "../shared/components/modal";

type Props = {
  children: ReactNode;
};

export default function ModalProvider({ children }: Props) {
  const [content, setContent] = useState(null);

  const setContentHandler = (items: ReactNode) => {
    console.log(items);
    setContent(items);
  };

  return (
    <ModalContext.Provider value={{ content, setContent: setContentHandler }}>
      {content ? <ModalBackground>{content}</ModalBackground> : null}
      {children}
    </ModalContext.Provider>
  );
}
