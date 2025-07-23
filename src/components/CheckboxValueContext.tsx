import React, { ReactNode } from 'react'
import { createContext , useState , useContext } from 'react'

interface CheckboxValueTypes{
    data : string[];
    setData : React.Dispatch<React.SetStateAction<string[]>>
    // setData : (items: string[]) => void;
}

export const MyContext = createContext<CheckboxValueTypes | undefined>(undefined)

const CheckboxValueProvider = ({children} : {children : ReactNode}) => {
  const [data, setData] = useState<string[]>([]);

  return (
    <>
    <MyContext.Provider value={{data, setData}}>
        {children}
    </MyContext.Provider>
    </>
  )
}

export default CheckboxValueProvider

export const useCheckboxValueContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useCheckboxContext must be used within a CheckboxProvider");
  }
  return context;
};