import { getServerAuthSession } from "~/server/auth";
import { TranslationBox } from "./TranslationBox";

export const TranslationBoxComponent: React.FC = async () => {
  const session = await getServerAuthSession();

  return <TranslationBox session={session} />;
};
