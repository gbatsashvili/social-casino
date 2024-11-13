import { useTheme } from "@/lib/themeProvider";
import { FC } from "react";
import { IconContainer, ToggleContainer } from "./toogleTheme.styled";
import { SunIcon } from "../../components/svgComponents/SunIcon";
import { MoonIcon } from "../../components/svgComponents/MoonIcon";

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleContainer onClick={toggleTheme}>
      <IconContainer active={theme === "dark"}>
        <MoonIcon />
      </IconContainer>
      <IconContainer active={theme === "light"}>
        <SunIcon />
      </IconContainer>
    </ToggleContainer>
  );
};

export default ThemeToggle;
