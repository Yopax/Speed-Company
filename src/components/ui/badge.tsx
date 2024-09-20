import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2  text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent text-[10px] lnueva font-normal bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent text-[10px] lnueva font-normal bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent text-[10px] lnueva font-normal bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground text-[10px] lnueva font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
