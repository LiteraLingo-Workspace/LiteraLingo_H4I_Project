import { LoadingPage } from '../_components/LoadingPage/index';
import { Poppins, Baloo_2 } from "next/font/google";

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

export default function Loading() {
  return (
    <main className={`${poppins.variable} ${baloo_2.variable}`}>
      <LoadingPage />
    </main>
  );
}
