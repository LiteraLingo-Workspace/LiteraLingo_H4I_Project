import { ThemeProvider } from "styled-components";
import { theme } from "./common/styles";
import GlobalStyle from "./common/styles/GlobalStyle";
import { LandingPage, UserAuthPage } from "./pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SavedPage} from "./pages/SavedPage/SavedPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/login" element={<UserAuthPage type="login" />} />
          <Route path="/signup" element={<UserAuthPage type="signup" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
