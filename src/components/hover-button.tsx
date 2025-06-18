import * as React from "react"
import { cn } from "@/lib/utils"

interface DiscoveryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'default' | 'lg'
}

const HoveredButton = React.forwardRef<HTMLButtonElement, DiscoveryButtonProps>(
    ({ className, children, disabled, variant = 'primary', size = 'default', ...props }, ref) => {
        return (
            <div className={cn(
                "relative w-fit group mt-2",
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}>
                <button
                    className={cn(
                        "text-nowrap border rounded-full flex items-center cursor-pointer gap-2",
                        // Size variants
                        size === 'sm' && "px-3 py-2 text-sm",
                        size === 'default' && "px-4 py-3",
                        size === 'lg' && "px-6 py-4 text-lg",
                        "absolute -top-2 left-0 group-hover:top-0 transition-all duration-300",
                        "disabled:cursor-not-allowed",
                        variant === 'primary' && "bg-white border-foreground text-primary",
                        variant === 'secondary' && "bg-white border-primary/20 text-primary shadow-sm hover:border-primary/40"
                    )}
                    ref={ref}
                    disabled={disabled}
                    {...props}
                >
                    {children}
                </button>

                <div className={cn(
                    "text-nowrap rounded-full flex items-center gap-2",
                    // Size variants
                    size === 'sm' && "px-3 py-2 text-sm",
                    size === 'default' && "px-4 py-3",
                    size === 'lg' && "px-6 py-4 text-lg",
                    "group-hover:bg-transparent transition-all duration-300",
                    variant === 'primary' && "bg-primary text-white",
                    variant === 'secondary' && "bg-gradient-to-r from-primary/10 to-primary/5 text-primary shadow-sm",
                    disabled && "pointer-events-none"
                )}>
                    {children}
                </div>
            </div>
        )
    }
)
HoveredButton.displayName = "HoveredButton"

export { HoveredButton }