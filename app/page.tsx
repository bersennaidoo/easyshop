import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicDialogWithNoSSR = dynamic(
  () => import("@/app/components/Dialog/Dialog"),
  { ssr: false }
);
export default function Home() {
  return (
    <div>Home</div>
  )
}
