import { ThemeProvider } from "styled-components";
import { theme } from "./styles/index";
import GlobalStyle from "./styles/GlobalStyle";
import {
  HomePage,
  LandingPage,
  UserAuthPage,
  SavedPage,
  MePage,
  ProgressPage,
  QuizPage,
} from "./pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/login" element={<UserAuthPage type="login" />} />
          <Route path="/signup" element={<UserAuthPage type="signup" />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/me" element={<MePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
