import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./common/styles";
import { Label } from "./common/components/Label";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" />
      </Routes>
      <Label color={"warmYellow"} bg={"faintYellow"}>
        Simile
      </Label>
      <Label color={"coolAccentBg"} bg={"faintBlue"}>
        Metaphor
      </Label>
      <Label color={"warm"} bg={"faintWarm"}>
        Metonymy
      </Label>
    </ThemeProvider>
  );
}

export default App;
