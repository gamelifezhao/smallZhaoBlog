"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  url: string;
  name: string;
  text: string;
  href: string;
}

export default (props: Props) => {
  return (
    <div className="px-30/100 mt-8 h-80">
      <motion.div
        key={props.url}
        className="relative h-40 flex-none shrink-0 snap-start overflow-hidden rounded-xl bg-zinc-100 ring-2 ring-lime-800/20 dark:bg-zinc-800 dark:ring-lime-300/10 md:h-72 md:rounded-3xl"
        animate={{
          opacity: 1,
          filter: "grayscale(0)",
          //   rotate: 2,
        }}
        layout
      >
        <Image
          src={props.url}
          alt={props.name}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
          priority
          width={500}
          height={300}
        />
        <span className="relative z-10 flex w-full flex-1 shrink-0 flex-col justify-between gap-0.5 rounded-b-[calc(1.5rem+1px)] bg-cover bg-bottom bg-no-repeat p-4 bg-blend-overlay [background-image:var(--post-image)] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:select-none before:rounded-b-[calc(1.5rem-1px)] before:bg-[--post-image-bg] before:opacity-70 before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:z-10 after:select-none after:rounded-b-[calc(1.5rem-1px)] after:bg-gradient-to-b after:from-transparent after:to-[--post-image-bg] after:backdrop-blur after:transition-opacity group-hover:before:opacity-30 md:p-5 mt-28">
          <h2 className="z-20 text-base font-bold tracking-tight text-[--post-image-fg] opacity-70 group-hover:opacity-100 md:text-xl transition-colors underline text-black">
            <a href="https://juejin.cn/user/2942755031223111">{props.text}</a>
          </h2>
        </span>
      </motion.div>
    </div>
  );
};
