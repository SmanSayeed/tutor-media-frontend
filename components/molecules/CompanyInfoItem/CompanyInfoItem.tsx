"use client";

import React from "react";
import Text from "@/components/atoms/Text/Text";
import { cn } from "@/lib/utils";

interface CompanyInfoItemProps {
  label: string;
  value: string;
  className?: string;
}

export default function CompanyInfoItem({
  label,
  value,
  className,
}: CompanyInfoItemProps) {
  return (
    <div className={cn("py-2", className)}>
      <Text
        as="div"
        variant="contact-text"
        className="font-semibold whitespace-nowrap"
      >
        {label}: {value}
      </Text>
    </div>
  );
}
