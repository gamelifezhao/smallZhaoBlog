"use client";

import { motion } from "framer-motion";
import { type ComponentProps } from "@zolplay/react";
import { clsxm } from "@zolplay/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import portraitImage from "@/images/avatar.jpg";
import { useEffect } from "react";

export default () => {
  return (
    <Image
      src={portraitImage}
      alt="User Avatar"
      sizes={"8rem"}
      className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-32 w-32  mb-8"
    />
  );
};
