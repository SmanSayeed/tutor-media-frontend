"use client";

import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva("transition-colors duration-200 font-medium", {
  variants: {
    variant: {
      nav: "text-brand-black hover:text-brand-primary-500",
      default: "text-brand-black hover:text-brand-primary-500",
      primary: "text-brand-primary-500 hover:text-brand-primary-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface LinkAtomProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  external?: boolean;
}

export default function LinkAtom({
  href,
  variant,
  className,
  external,
  children,
  ...props
}: LinkAtomProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkVariants({ variant }), className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(linkVariants({ variant }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}
