# Frontend Documentation

## How to run

run `npm run install` to run the frontend

## How to create React Components

Ensure that your component is declared in the following way for faster TypeScript compilation speeds:

`export const ComponentName: React.FC<ComponentNameProps> = ({ ...props... }) => {}`

## How to organize React Components

When a React Component is being used in multiple areas, move it and its corresponding `styled-component` objects into its own file. Then import it into the file you'd like to use it in.

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

Your `.tsx` file can also contain just a single `styled-component` object and nothing else.

`FlexRow.tsx`:

```
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 48px;
`;
```

## Pull Requests

Developers when submitting Pull Requests should use the template in [a relative link](/PRTemplate.md) to ensure quality and testing.
