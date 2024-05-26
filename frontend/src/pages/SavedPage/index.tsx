import { Header } from "../../common/components/Header";
import { Navbar } from "../../common/components/Navbar";
import { theme } from "../../common/styles";
import { Background } from "./Background";
import { Modal } from "./Modal";

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
