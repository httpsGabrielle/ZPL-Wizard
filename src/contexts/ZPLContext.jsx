// contexts/UserContext.jsx
import { createContext, useContext, useState } from "react";
import { ViewContext } from "./ViewContext";

export const ZPLContext = createContext();

export function ZPLProvider({ children }) {
  const [fileTitle, setFileTitle] = useState("Untitled");
  const [elements, setElements] = useState([]);
  const { setSelectedElementIndex } = useContext(ViewContext);

  const addElement = (element) => {
    setElements((prevElements) => [...prevElements, element]);
    setSelectedElementIndex(elements.length);
  };

  return (
    <ZPLContext.Provider value={{ fileTitle, setFileTitle, elements, setElements, addElement }}>
      {children}
    </ZPLContext.Provider>
  );
}
