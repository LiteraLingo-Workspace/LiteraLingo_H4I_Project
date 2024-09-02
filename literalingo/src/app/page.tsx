import { api, HydrateClient } from "~/trpc/server";
import styles from "./index.module.css";
import { LandingPage } from "./_components/LandingPage";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className={styles.main}>
        <LandingPage />
      </main>
    </HydrateClient>
  );
}
