import { Header } from "../../components/Header/index";
import { Navbar } from "../../components/Navbar/index";
import { theme } from "../../styles/index";
import { Background } from "./Background/index";
import { Modal } from "./Modal/index";

export const SavedPage: React.FC = () => {
  return (
    <div>
      <Header title="Saved" color={theme.colors.primary} />
      <Background />
      <Modal />
      <Navbar />
    </div>
  );
};
