# Frontend Documentation

## How to run

`npm i && npm run dev`

## How to organize your code

Use Prettier for formatting. Default settings are fine

## How to create components

Ensure that your component is declared in the following way for faster TypeScript compilation speeds:

`export const ComponentName: React.FC<ComponentNameProps> = ({ ...props... }) => {}`

## How to organize components

Components and their corresponding styling files are stored in the same directory for ease of use and development

`QuizPage/Prompt/Prompt.ts`:

```
import * as S from "./Styles";

export const Prompt: React.FC = () => {
  return (
    <S.Container>
      <p>
        Her word had the strength of titanium.
      </p>
    </S.Container>
  );
};
```

`QuizPage/Prompt/Styles.ts`:

```
import styled from "styled-components";
import { theme } from "../../../styles";

const Container = styled.div`
  height: 95px;
  width: 344px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.coolAccentBg};
  margin-top: 15px;
  border-radius: 10px;
`;

export { Container };
```

## Pull Requests

Use and follow the template in [PRTemplate.md](/PRTemplate.md) to ensure quality and proper testing
