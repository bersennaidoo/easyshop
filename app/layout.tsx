import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./assets/sass/globals.scss";
import "jquery-ui-dist/jquery-ui.min.css";
//import { inter } from "@/app/components/Fonts/Fonts";
import BootstrapClientJS from "./components/BootstrapClientJS/BootstrapClientJS";

export const metadata: Metadata = {
  title: "Bs5 Template",
  description: "Bs5 Template",
};

const DynamicHeaderWithNoSSR = dynamic(
  () => import("@/app/components/Header/Header"),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="">
            <DynamicHeaderWithNoSSR />
          {children}
        </div>
        <BootstrapClientJS />
      </body>
    </html>
  );
}
