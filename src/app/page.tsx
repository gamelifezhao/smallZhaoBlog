"use client";
import dynamic from "next/dynamic";
import { useRive } from "@rive-app/react-canvas";
const HomePages = dynamic(() => import("@/components/HomePages"), {
  loading: () => <div>lading</div>,
  ssr: false,
});

export default () => {
  return <HomePages />;
};
