import Image from "next/image";
import dynamic from "next/dynamic";
import CHome from "@/app/components/c-home/c-home"

const DynamicDialogWithNoSSR = dynamic(
  () => import("@/app/components/Dialog/Dialog"),
  { ssr: false }
);
export default function Home() {
  return (
    <CHome />
  )
}
