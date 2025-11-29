"use client";

import React from "react";
import LinkAtom from "@/components/atoms/Link/Link";
import Icon from "@/components/atoms/Icon/Icon";
import Text from "@/components/atoms/Text/Text";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function NavLink({
  label,
  href,
  hasDropdown,
  isActive,
  onClick,
  className,
}: NavLinkProps) {
  const baseClasses = cn(
    "flex items-center gap-1 hover:text-brand-primary-500 transition-colors cursor-pointer",
    isActive && "text-brand-primary-500",
    className
  );

  if (hasDropdown) {
    return (
      <button onClick={onClick} className={baseClasses}>
        <Text variant="others-text-base" as="span" className="font-medium">
          {label}
        </Text>
        <Icon name="ChevronDown" size={16} />
      </button>
    );
  }

  if (href) {
    return (
      <LinkAtom href={href} variant="nav" className={baseClasses}>
        <Text variant="others-text-base" as="span" className="font-medium">
          {label}
        </Text>
      </LinkAtom>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      <Text variant="others-text-base" as="span" className="font-medium">
        {label}
      </Text>
    </button>
  );
}
