import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva(
    "text-black",
    {
        variants: {
            variant: {
                "header-heading": "text-8xl font-semibold", // 96px SemiBold
                "heading": "text-5xl font-semibold", // 48px SemiBold (closest to 43px)
                "sub-heading": "text-2xl font-medium", // 24px Medium (closest to 23px)
                "others-text-lg": "text-lg font-normal", // 18px Regular
                "others-text-base": "text-base font-light", // 16px Light (closest to 15px)
            },
        },
        defaultVariants: {
            variant: "others-text-base",
        },
    }
)

type TextProps = React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof textVariants> & {
        as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div"
    }

export default function Text({
    variant,
    className,
    as = "p",
    children,
    ...props
}: TextProps) {
    const Component = as

    return (
        <Component
            className={cn(textVariants({ variant, className }))}
            {...props}
        >
            {children}
        </Component>
    )
}