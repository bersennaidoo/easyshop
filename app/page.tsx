import Image from "next/image";
import dynamic from "next/dynamic";
import CHome from "@/app/components/c-home/c-home"

const CHomeWithNoSSR = dynamic(
  () => import("@/app/components/c-home/c-home"),
  { ssr: false }
);
export default function Home() {
  return (
    <CHomeWithNoSSR />
  )
}
