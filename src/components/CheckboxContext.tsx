import React, { useState, useContext, createContext, ReactNode } from "react";
interface CheckboxContextType {
  selectedValues: string[];
  setSelectedValues: (values: string[]) => void;
}

export const CheckboxContext = createContext<CheckboxContextType | undefined>(undefined);


const CheckboxProvider = ({ children }: { children: ReactNode }) => {

    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    return (
        <CheckboxContext.Provider value={{ selectedValues, setSelectedValues }}>
            {children}
        </CheckboxContext.Provider>
    )

}

export default CheckboxProvider

export const useCheckboxContext = () => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error("useCheckboxContext must be used within a CheckboxProvider");
  }
  return context;
};