import { useState, createContext, useContext, useEffect } from "react";

// Get window size by this context
const ViewContext = createContext(undefined);

export const useView = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error("useView must be used within a ViewProvider");
  }

  return context;
};

export const ViewProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return <ViewContext.Provider value={width}>{children}</ViewContext.Provider>;
};
