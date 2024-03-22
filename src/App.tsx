import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./common/styles";
import { TextInputField } from "./common/components/TextInputField";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" />
      </Routes>
      <TextInputField
        placeholder="ex: janedoe@gmail.com"
        type="email"
      ></TextInputField>
      <br></br>
      <br></br>
      <TextInputField
        placeholder="Enter your password..."
        type="password"
      ></TextInputField>
      <br></br>
      <br></br>
      <TextInputField
        placeholder="ex: janedoe@gmail.com"
        type="email"
      ></TextInputField>
      <br></br>
      <br></br>
      <TextInputField
        placeholder="Enter your password..."
        type="password"
      ></TextInputField>
    </ThemeProvider>
  );
}

export default App;
