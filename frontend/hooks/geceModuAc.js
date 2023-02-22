import React, { useState } from "react";
import { useLocalStorageKullan } from "./localStorageKullan";

export const geceModuAc = () => {
  const [mode, setMode] = useState(true);
  const handleChanges = (useLocalStorageKullan) => {
    setValue(useLocalStorageKullan);
  };
  return [mode, setMode, handleChanges];
};
