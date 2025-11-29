"use client";

import React from "react";
import Image from "next/image";
import Text from "@/components/atoms/Text/Text";
import { cn } from "@/lib/utils";

interface ContactItemProps {
  icon: "email" | "phone" | "location";
  children: React.ReactNode;
  className?: string;
}

const iconMap = {
  email: "/assets/Icons/email.png",
  phone: "/assets/Icons/phone.png",
  location: "/assets/Icons/location-icon.png",
};

export default function ContactItem({
  icon,
  children,
  className,
}: ContactItemProps) {
  return (
    <div className={cn("flex items-start gap-3 py-2", className)}>
      <Image
        src={iconMap[icon]}
        alt={`${icon} icon`}
        width={20}
        height={20}
        className="w-5 h-5 mt-1"
      />
      <Text as="div" variant="contact-text">
        {children}
      </Text>
    </div>
  );
}
