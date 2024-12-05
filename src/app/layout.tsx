import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import UserProvider from "./UserProvider";
import "./global.css";

export const metadata: Metadata = {
  title: "LiteraLingo",
  description: "Unlock English, Literally!",
  icons: [{ rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
