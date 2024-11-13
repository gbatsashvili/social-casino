interface ColorTypes {
  background: string;
  blackDark: string;
  blackLight: string;
  text: string;
  white: string;
  blue: string;
  green: string;
  lightGrey: string;
  buttonPrimary: string;
  buttonSecondary: string;
  btnColorLight: string;
  btnColorDark: string;
}
interface FontTypes {
  primary: string;
  secondary: string;
  size: string;
}

export interface CustomerConfig {
  layout: string;
  footer: "show" | "hide";
  banner: "show" | "hide";
  logo: string;
  lightTheme: {
    colors: ColorTypes;
    fonts: FontTypes;
  };
  darkTheme: {
    colors: ColorTypes;
    fonts: FontTypes;
  };
}
