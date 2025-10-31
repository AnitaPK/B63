import { createContext } from "react";

// Create the ThemeContext
const ThemeContext = createContext({
  theme: "light",         
  toggleTheme: () => {},  
});

export default ThemeContext;