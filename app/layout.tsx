import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./assets/sass/globals.scss";
import "jquery-ui-dist/jquery-ui.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import { inter } from "@/app/components/Fonts/Fonts";
import BootstrapClientJS from "./components/BootstrapClientJS/BootstrapClientJS";
import JSLib from "@/app/components/JSLib/js-lib";

export const metadata: Metadata = {
  title: "Easy2Shop",
  description: "Shopping made easy",
};

const DynamicHeaderWithNoSSR = dynamic(
  () => import("@/app/components/Header/Header"),
  { ssr: false }
);

const Bs5 = dynamic(
  () => import("@/app/components/BootstrapClientJS/BootstrapClientJS"),
  { ssr: false }
);

const JS = dynamic(() => import("@/app/components/JSLib/js-lib"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <DynamicHeaderWithNoSSR />
        <div className="container-fluid">{children}</div>
        <Bs5 />
        <JS />
      </body>
    </html>
  );
}
