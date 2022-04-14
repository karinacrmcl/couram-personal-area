import React, { ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { ExtendedInfoContext } from "../context/extended-info";

type Props = {
  children: ReactNode;
};

export default function ExtendedInfoProvider({ children }: Props) {
  const location = useLocation();
  const [isExtendedOpen, setIsExtendedOpen] = useState<boolean>(false);
  const [id, setId] = useState(0);

  const setOpenHandler = (isOpen: boolean) => {
    setIsExtendedOpen(isOpen);
  };

  useEffect(() => {
    setIsExtendedOpen(false);
    setId(0);
  }, [location]);

  return (
    <ExtendedInfoContext.Provider
      value={{ isExtendedOpen, setIsExtendedOpen: setOpenHandler, id, setId }}
    >
      {children}
    </ExtendedInfoContext.Provider>
  );
}
