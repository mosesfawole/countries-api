import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("true");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <StateContext.Provider
      value={{
        darkMode,
        setDarkMode,
        theme,
        setTheme,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
