import React, { ReactNode, useState, useCallback } from "react";
import { ExtendedInfoContext } from "../context/extended-info";

type Props = {
  children: ReactNode;
};

export default function ExtendedInfoProvider({ children }: Props) {
  const [isExtendedOpen, setIsExtendedOpen] = useState<boolean>(false);
  const [id, setId] = useState(1);

  console.log(isExtendedOpen);

  const setOpenHandler = (isOpen: boolean) => {
    setIsExtendedOpen(isOpen);
  };

  return (
    <ExtendedInfoContext.Provider
      value={{ isExtendedOpen, setIsExtendedOpen: setOpenHandler, id, setId }}
    >
      {children}
    </ExtendedInfoContext.Provider>
  );
}
