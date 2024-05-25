import { Header } from "../../common/components/Header";
import { TypeLabel } from "../../common/components/TypeLabel";
import { theme } from "../../common/styles";

export const QuizPage: React.FC = () => {
  return (
    <Header
      title="Quiz"
      typeLabel={
        <TypeLabel
          color={theme.colors.warmYellow}
          bg={theme.colors.faintYellow}
        >
          Simile
        </TypeLabel>
      }
    />
  );
};
