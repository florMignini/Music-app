import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* variable declaration */
:root {
  --font-color: #ffff;
  --background-color: #121212;
  --background-card: #282828;
  --secondaryFont-color: #32bea6;
  --marginDataCard: 0.4rem;
}
    *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    }
`;
