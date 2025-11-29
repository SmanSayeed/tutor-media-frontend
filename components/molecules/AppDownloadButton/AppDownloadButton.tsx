"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AppDownloadButtonProps {
  type: "appstore" | "playstore";
  className?: string;
}

export default function AppDownloadButton({
  type,
  className,
}: AppDownloadButtonProps) {
  return (
    <div
      className={cn(
        "h-12 bg-white/10 rounded-lg flex items-center justify-center text-brand-footer-text border border-white/20 hover:bg-white/20 transition-colors cursor-pointer",
        className
      )}
    >
      {type === "appstore" ? "App Store" : "Play Store"}
    </div>
  );
}
