import * as React from "react"
import { cn } from "../../lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  variant?: "line" | "circle";
  size?: "sm" | "lg";
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, variant = "line", size = "sm", ...props }, ref) => {
    if (variant === "circle") {
      const deg = (value / 100) * 360;
      const ringClass = size === "lg" ? "pc-ring-lg" : "pc-ring";
      const innerClass = size === "lg" ? "pc-inner-lg" : "pc-inner";
      return (
        <div
          ref={ref}
          className={cn(ringClass, className)}
          style={{
            background: `conic-gradient(var(--pine) ${deg}deg, var(--line) 0deg)`,
          }}
          {...props}
        >
          <div className={innerClass}>{value}%</div>
        </div>
      );
    }

    // Linear bar progress
    return (
      <div 
        ref={ref} 
        className={cn("bar-track", className)} 
        {...props}
      >
        <div
          className="bar-fill"
          style={{
            width: `${value}%`,
            transition: "width 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    );
  }
)
Progress.displayName = "Progress"

export default Progress;
