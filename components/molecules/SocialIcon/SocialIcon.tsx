"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  platform: "facebook" | "linkedin" | "youtube" | "instagram" | "tiktok";
  href: string;
  className?: string;
}

const iconMap = {
  facebook: "/assets/SocialIcon/facebook-icon.png",
  linkedin: "/assets/SocialIcon/linkedin-icon.png",
  youtube: "/assets/SocialIcon/youtube-icon.png",
  instagram: "/assets/SocialIcon/instagram-icon.png",
  tiktok: "/assets/SocialIcon/tiktok-icon.png",
};

export default function SocialIcon({
  platform,
  href,
  className,
}: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "w-9 h-9 flex items-center justify-center rounded-full bg-brand-primary-500 hover:bg-brand-primary-600 transition-colors",
        className
      )}
    >
      <Image
        src={iconMap[platform]}
        alt={`${platform} icon`}
        width={24}
        height={24}
        className="w-6 h-6 object-contain"
      />
    </Link>
  );
}
