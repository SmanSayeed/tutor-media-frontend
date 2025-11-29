"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

type IconName = keyof typeof LucideIcons;

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName;
  size?: number;
  color?: string;
}

export default function Icon({
  name,
  size = 24,
  color = "currentColor",
  className,
  ...props
}: IconProps) {
  const LucideIcon = LucideIcons[name] as React.ComponentType<any>;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <LucideIcon
      size={size}
      color={color}
      className={cn(className)}
      {...props}
    />
  );
}
