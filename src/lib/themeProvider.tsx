import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { defaultTheme } from "@/styles/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useStore } from "@/store/store";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// The useTheme hook is used to access the ThemeContext.
// It allows components to get the current theme,
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// The ThemeProvider is a component that wraps the application or any subtree where theme context needs to be applied.
// It provides the theme context and applies the selected theme to the app either default theme or the customer based theme which can be taken from global state 'configObject'
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // get theme from localStorage if exist or detect the user's system preference

  useEffect(() => {
    // Retrieve theme from local storage if available
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If no saved theme, detect the user's system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  const configObject = useStore((state) => state.configObject);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Save theme to local storage
      return newTheme;
    });
  };

  const themeConfig = configObject ? configObject : defaultTheme;
  const themeStyles =
    theme === "light" ? themeConfig.lightTheme : themeConfig.darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themeStyles}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// Functionality:
// The theme is managed via the useState hook, with a default theme set to "dark".
// The useStore hook is used to retrieve a configObject from the store, which may contain the theme configuration.
// If configObject is available, it is used to determine the theme styles; otherwise, the default theme is used.
// The StyledThemeProvider from styled-components is used to apply the selected theme styles throughout the application.
