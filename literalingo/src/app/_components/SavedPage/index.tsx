import { Header } from "../../_components/shared/Header/Header";
import { Navbar } from "../../_components/shared/Navbar/Navbar";
import { theme } from "../../../styles/index";
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
