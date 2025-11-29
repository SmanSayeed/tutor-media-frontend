import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("text-black", {
  variants: {
    variant: {
      "header-heading": "text-8xl font-semibold", // 96px SemiBold
      heading: "text-5xl font-semibold", // 48px SemiBold (closest to 43px)
      "sub-heading": "text-2xl font-medium", // 24px Medium (closest to 23px)
      "others-text-lg": "text-lg font-normal", // 18px Regular
      "others-text-base": "text-base font-light", // 16px Light (closest to 15px)
      "footer-link": "text-white text-lg font-normal capitalize leading-[124%]", // 18px Regular, 124% line-height, capitalize, white
      "download-app-heading":
        "text-white text-[24px] font-medium capitalize leading-[124%]", // 42.13px Medium, 124% line-height, capitalize, white
      "social-heading":
        "text-white text-[12.5px] font-semibold capitalize leading-[124%] font-rubik", // 20.81px SemiBold, 124% line-height, capitalize, Rubik
      "contact-text":
        "text-white text-lg font-normal capitalize leading-[156%]", // 18px Regular, 156% line-height, capitalize, white
    },
  },
  defaultVariants: {
    variant: "others-text-base",
  },
});

type TextProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants> & {
    as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  };

export default function Text({
  variant,
  className,
  as = "p",
  children,
  ...props
}: TextProps) {
  const Component = as;

  return (
    <Component className={cn(textVariants({ variant, className }))} {...props}>
      {children}
    </Component>
  );
}
