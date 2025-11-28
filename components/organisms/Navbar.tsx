"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/atoms/Logo";
import { AuthButtons } from "@/components/molecules/AuthButtons";

export function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <AuthButtons />
      </div>
    </motion.header>
  );
}

