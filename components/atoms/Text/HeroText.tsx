import React from 'react'
import { cn } from "@/lib/utils"

type HeroTextProps = React.HTMLAttributes<HTMLElement> & {
    as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div"
}

export default function HeroText({
    className,
    as = "h1",
    ...props
}: HeroTextProps) {
    const Component = as

    return (
        <Component
            className={cn(
                "font-semibold", // font-weight: 600
                "text-[96px]", // font-size: 96px
                "leading-[132%]", // line-height: 132%
                "tracking-normal", // letter-spacing: 0%
                "capitalize", // text-transform: capitalize
                "text-[#00B3B3]", // color: #00B3B3
                className
            )}
            {...props}
        >
            Get Tuition Jobs
        </Component>
    )
}