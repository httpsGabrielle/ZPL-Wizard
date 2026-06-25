// contexts/UserContext.jsx
import { createContext, useState } from "react";

export const ViewContext = createContext();

export function ViewProvider({ children }) {
  const [leftBarView, setLeftBarView] = useState("file");
  const [rightBarView, setRightBarView] = useState(null);
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);

  return (
    <ViewContext.Provider value={{ leftBarView, setLeftBarView, rightBarView, setRightBarView, selectedElementIndex, setSelectedElementIndex }}>
      {children}
    </ViewContext.Provider>
  );
}
