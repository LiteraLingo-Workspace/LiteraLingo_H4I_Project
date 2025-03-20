import { Header } from "../shared/Header/Header";
import { Navbar } from "../shared/Navbar/Navbar";
import { theme } from "../../../styles/index";

export const LoadingPage: React.FC = () => {
  return (
    <div>
      <Header title="Loading..." color={theme.colors.primary} />
      <Navbar />
    </div>
  );
};
