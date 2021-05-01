import React from "react";
import "./assets/scss/main.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset, Window, WindowHeader } from "react95";
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import Game from "./containers/Game";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: teal;
  padding: 30px;
`;

const StyledWindow = styled(Window)`
  width: fit-content;
  display: block;
  margin: 0 auto;
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AppWrapper>
          <StyledWindow>
            <WindowHeader>Minesweeper</WindowHeader>
            <Game />
          </StyledWindow>
        </AppWrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
