"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Avatar from "@/components/Avatar";
import Photos from "@/components/Photos";
import { motion } from "framer-motion";
import { SparkleIcon, UserSecurityIcon } from "@/assets/index";
import Balancer from "react-wrap-balancer";
import BlogPostCard from "@/components/BlogPostCard";
import { SocialLink } from "@/components/links";
// ! 这样导入目前不生效
const Utterances = dynamic(
  import("@/components/Utterances"),
  {
    loading: () => <p>Loading...</p>,
  },
);
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
      开发者
    </span>
  );
};

function OCD() {
  return (
    <span className="group">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>跳跃性思维</span>
    </span>
  );
}

function Founder() {
  return (
    <span className="group">
      <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/5 dark:group-hover:fill-zinc-200/80" />
      <span>Spider-Man</span>
    </span>
  );
}

export default () => {
  return (
    <div className="mx-auto  pt-10 z-10 relative">
      <motion.h1
        className=" text-3r px-22/100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Avatar />
        <Developer />，
        <Gaming />，
        <br />
        <OCD />，
        <Founder />
      </motion.h1>
      <motion.p
        className=" mt-6 text-base text-zinc-500 dark:text-zinc-400 px-22/100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          我是 small Zhao
          我很高兴能够在这篇博客中向您介绍一下我自己。我是一个充满激情、充满好奇心的个体，对生活中的各种经历和挑战充满热情。希望通过这个博客，您能更深入地了解我，我们可以一起探索这个丰富多彩的世界！(目前暂不支持移动端)
          <br />
        </Balancer>
      </motion.p>
      <motion.div
        className="px-22/100 mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://github.com/gamelifezhao"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:gamelifezhao@163.com"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
      <Photos />
      <BlogPostCard
        url="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e98995817ab54dd3ae89d6bf988edc07~tplv-k3u1fbpfcp-watermark.image?"
        name={"呆呆呆呆呆呆呆呆的碎碎念"}
      />
      <Utterances id="1" />
    </div>
  );
};
