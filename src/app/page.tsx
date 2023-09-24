"use client";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";

const Developer = () => {
  return (
    <span className="text-3r">
      <span className="font-mono">&lt;</span>开发者
      <span className="font-mono">/&gt;</span>
      <span className="text-lg" />
    </span>
  );
};
const Gaming = () => {
  return (
    <span className="group relative rounded-2xl bg-pink-300/5 p-1 dark:bg-white/5 text-3r">
      <span className="pointer-events-none absolute inset-0 border border-pink-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-pink-400/90">
        <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-pink-700 bg-zinc-50 dark:border-pink-400" />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-pink-700 bg-zinc-50 dark:border-pink-400" />
        <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-pink-700 bg-zinc-50 dark:border-pink-400" />
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-pink-700 bg-zinc-50 dark:border-pink-400" />
      </span>
      猛男粉爱好者
    </span>
  );
};
export default () => {
  const containerVariants = {
    initial: {
      x: -100, // 初始水平位置
      opacity: 0, // 初始不透明度
    },
    animate: {
      x: 0, // 动画后的水平位置
      opacity: 1, // 动画后的不透明度
    },
  };
  return (
    <div className="mx-auto px-10/100 pt-10 z-10">
      <motion.div
        initial="initial"
        animate="animate"
        variants={containerVariants}
        className="pl-32 text-3r"
      >
        <Avatar />
        <Developer />，
        <Gaming />，
        <br />
      </motion.div>
    </div>
  );
};
