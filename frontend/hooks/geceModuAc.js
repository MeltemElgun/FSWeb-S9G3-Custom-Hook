import React, { useState } from "react";
import { useLocalStorageKullan } from "./localStorageKullan";

export const geceModuAc = (key, initialValue) => {
  const [mode, setMode] = useLocalStorageKullan(key, initialValue);
  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
  };
  return [mode, setMode, handleChanges];
};
