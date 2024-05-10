import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./common/styles";
import GlobalStyle from "./common/styles/GlobalStyle";
import { LandingPage } from "./pages/index";
import { LoginPage, SignupPage } from "./pages/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={SignupPage} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
