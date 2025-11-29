"use client";

import React from "react";
import LinkAtom from "@/components/atoms/Link/Link";
import Text from "@/components/atoms/Text/Text";
import { cn } from "@/lib/utils";

interface FooterLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function FooterLink({
  href,
  label,
  className,
}: FooterLinkProps) {
  return (
    <LinkAtom
      href={href}
      className={cn(
        "text-brand-footer-text hover:text-brand-primary-500 transition-colors block py-1",
        className
      )}
    >
      <Text as="span" variant="footer-link">
        {label}
      </Text>
    </LinkAtom>
  );
}
