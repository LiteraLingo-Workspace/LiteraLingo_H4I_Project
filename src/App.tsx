import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { LoginPage } from "./pages/LoginPage";

import { theme } from "./common/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        <Route path="/login" Component={LoginPage} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;