"use client";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import { SparkleIcon, UserSecurityIcon } from "@/assets/index";
import Balancer from "react-wrap-balancer";
import { SocialLink } from "@/components/links";
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
      不被定义之人
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
    <div className="mx-auto px-10/100 pt-10 z-10 relative">
      <motion.h1
        className="pl-32 text-3r"
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
        className="pl-32 mt-6 text-base text-zinc-500 dark:text-zinc-400"
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
          也可以叫我闹子，INTP(以思考为主导的人格)，如果你也思考过生命的意义我想我们会是很好的朋友
          <br />
          间歇性失忆，对技术的追求是永远的（当然了也存在一直在往前走基础丢的一干二净😭）
          <br />
          旅游过很多城市，认识过很多人
          <br />
          react 是理想 vue 是生活 希望生活越来越好，所以我选react😝
        </Balancer>
      </motion.p>
      <motion.div
        className="pl-32 mt-6 flex gap-6"
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
    </div>
  );
};
