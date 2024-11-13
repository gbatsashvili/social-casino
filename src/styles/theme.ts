import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  layout: "sidebar",
  footer: "show",
  banner: "show",
  logo: "/src/assets/logo-1.svg",
  lightTheme: {
    colors: {
      background: "#EEF7FF",
      blackDark: "#7AB2B2",
      blackLight: "#CDE8E5",
      text: "#4D869C",
      white: "#333",
      blue: "#4D869C",
      green: "#0fa587",
      lightGrey: "#2f3031",
      buttonPrimary: "#EEF7FF",
      buttonSecondary: "#ffcb8a",
      btnColorLight: "#333",
      btnColorDark: "#333",
    },
    fonts: {
      primary: "Red Hat Display",
      secondary: "Roboto",
      size: "14px",
    },
  },
  darkTheme: {
    colors: {
      background: "#1e1e1e",
      blackDark: "#262626",
      blackLight: "#232323",
      text: "#333",
      white: "#f9f9f9",
      blue: "#009bff",
      green: "#0fa587",
      lightGrey: "#2f3031",
      buttonPrimary: "#1e1e1e",
      buttonSecondary: "#ffcb8a",
      btnColorLight: "#f9f9f9",
      btnColorDark: "#333",
    },
    fonts: {
      primary: "Red Hat Display",
      secondary: "Roboto",
      size: "14px",
    },
  },
};
