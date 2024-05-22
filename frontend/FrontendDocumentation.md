# Frontend Documentation

## How to run

run `npm i && npm run install` in the `frontend` folder

## How to create components

Ensure that your component is declared in the following way for faster TypeScript compilation speeds:

`export const ComponentName: React.FC<ComponentNameProps> = ({ ...props... }) => {}`

## How to organize components

Components and their corresponding `styled-components` objects are in the same file for ease of use and development

`Background.tsx`:

```
interface BackgroundProps {
  name: string;
  type: number;
}

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: -75px;
`;

export const Background: React.FC<BackgroundProps> = ({ name, type }) => {
  return (
    <FlexColumn>
      ...
    </FlexColumn>
  );
};
```

Your component files can also just contain `styled-component` objects and nothing else

`FlexRow.tsx`:

```
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 48px;
`;

const Label = styled.p`
  color: ${theme.colors.primary};
  padding: 0;
  margin: 0;
`;

export { FlexRow, Label };
```

## Pull Requests

Developers when submitting Pull Requests should use the template in [PRTemplate.md](/PRTemplate.md) to ensure quality and testing.
