import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: "Red Hat Display", sans-serif;
}

body {
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fonts.size};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
button{
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
}
input, select, textarea {
  font-family: ${({ theme }) => theme.fonts.primary};
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
`;

export default GlobalStyle;
