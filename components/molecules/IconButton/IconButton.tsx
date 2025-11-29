"use client";

import React from "react";
import Icon from "@/components/atoms/Icon/Icon";
import { cn } from "@/lib/utils";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label?: string;
}

export default function IconButton({
  icon,
  label,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",
        className
      )}
      {...props}
    >
      <Icon name={icon as any} size={20} />
      {label && <span className="text-sm font-medium">{label}</span>}
    </button>
  );
}
