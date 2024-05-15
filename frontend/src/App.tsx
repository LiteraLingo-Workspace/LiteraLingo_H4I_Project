import { ThemeProvider } from "styled-components";
import { theme } from "./common/styles";
import GlobalStyle from "./common/styles/GlobalStyle";
import { HomePage, LandingPage, UserAuthPage } from "./pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<UserAuthPage type="login" />} />
          <Route path="/signup" element={<UserAuthPage type="signup" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
