import { HydrateClient } from "~/trpc/server";
import { Poppins, Baloo_2, Quicksand, Outfit } from "next/font/google";
import { ProgressPage } from "../_components/ProgressPage";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const baloo_2 = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baloo-2",
  weight: ["400", "500", "600", "700", "800"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
  weight: ["700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "700"],
});

export default async function Home() {
  return (
    <HydrateClient>
      <main
        className={`${poppins.variable} ${baloo_2.variable} ${quicksand.variable} ${outfit.variable}`}
      >
        <ProgressPage />
      </main>
    </HydrateClient>
  );
}
