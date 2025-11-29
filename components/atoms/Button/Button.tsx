"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-lg",
    "font-medium",
    "transition-all",
    "duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "active:scale-95",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        filled: ["text-white", "shadow-sm", "hover:shadow-md"],
        outline: ["border-2", "bg-transparent", "shadow-sm", "hover:shadow-md"],
        ghost: ["bg-transparent", "hover:bg-opacity-10"],
        link: ["bg-transparent", "underline-offset-4", "hover:underline"],
      },

      color: {
        primary: "",
        secondary: "",
        success: "",
        error: "",
        neutral: "",
      },

      size: {
        sm: "h-9 px-3 text-sm gap-1.5",
        md: "h-11 px-4 text-base gap-2",
        lg: "h-12 px-6 text-lg gap-2.5",
        xl: "h-14 px-8 text-xl gap-3",
      },

      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },

      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-lg",
        lg: "rounded-xl",
        full: "rounded-full",
      },
    },

    compoundVariants: [
      {
        variant: "filled",
        color: "primary",
        className: [
          "bg-brand-primary-500", // #00b3b3
          "text-white",
          "hover:bg-brand-primary-600", // #009999
          "active:bg-brand-primary-700", // #007f7f
        ],
      },
      {
        variant: "outline",
        color: "primary",
        className: [
          "bg-white",
          "border-brand-primary-500", // #00b3b3
          "text-brand-primary-500", // #00b3b3
          "hover:bg-brand-primary-50", // #e6f7f7
        ],
      },

      {
        variant: "ghost",
        color: "primary",
        className: [
          "text-brand-primary-500", // #00b3b3
          "hover:bg-brand-primary-50", // #e6f7f7
          "focus-visible:ring-brand-primary-500",
        ],
      },

      {
        variant: "filled",
        color: "secondary",
        className: [
          "bg-brand-primary-600", // #009999
          "text-white",
          "hover:bg-brand-primary-700", // #007f7f
          "focus-visible:ring-brand-primary-600",
        ],
      },
      {
        variant: "outline",
        color: "secondary",
        className: [
          "bg-white",
          "border-brand-primary-600", // #009999
          "text-brand-primary-600", // #009999
          "hover:bg-brand-primary-50", // #e6f7f7
          "focus-visible:ring-brand-primary-600",
        ],
      },

      {
        variant: "filled",
        color: "success",
        className: [
          "bg-brand-primary-500",
          "text-white",
          "hover:bg-brand-primary-600",
          "focus-visible:ring-brand-primary-500",
        ],
      },

      {
        variant: "filled",
        color: "error",
        className: [
          "bg-red-500",
          "hover:bg-red-600",
          "focus-visible:ring-red-500",
        ],
      },
      {
        variant: "outline",
        color: "error",
        className: [
          "border-red-500",
          "text-red-600",
          "hover:bg-red-50",
          "focus-visible:ring-red-500",
        ],
      },

      {
        variant: "filled",
        color: "neutral",
        className: [
          "bg-brand-footer-bg", // #003333
          "text-brand-footer-text", // #cceeee
          "hover:bg-brand-primary-900", // #004d4d
          "focus-visible:ring-brand-primary-500",
        ],
      },
      {
        variant: "outline",
        color: "neutral",
        className: [
          "bg-white",
          "border-brand-footer-bg", // #003333
          "text-brand-footer-bg", // #003333
          "hover:bg-gray-50",
          "focus-visible:ring-brand-footer-bg",
        ],
      },
    ],

    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "md",
      fullWidth: false,
      rounded: "md",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      size,
      fullWidth,
      rounded,
      isLoading = false,
      iconLeft,
      iconRight,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          buttonVariants({ variant, color, size, fullWidth, rounded }),
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {!isLoading && iconLeft && <span className="shrink-0">{iconLeft}</span>}

        {children}

        {!isLoading && iconRight && (
          <span className="shrink-0">{iconRight}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
export default Button;
