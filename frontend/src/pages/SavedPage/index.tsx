import { Header } from "../../common/components/Header";
import { Navbar } from "../../common/components/Navbar";
import { Background } from "./Background";
import { Modal } from "./Modal";

export const SavedPage: React.FC = () => {
  return (
    <div>
      <Header title="Saved" />
      <Background />
      <Modal />
      <Navbar />
    </div>
  );
};
