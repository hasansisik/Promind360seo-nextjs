import * as React from "react"
import { cn } from "@/lib/utils"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "error" | "warning"
  message: string
  onClose?: () => void
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = "default", message, onClose, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "success":
          return "bg-green-50 border-green-200 text-green-800"
        case "error":
          return "bg-red-50 border-red-200 text-red-800"
        case "warning":
          return "bg-yellow-50 border-yellow-200 text-yellow-800"
        default:
          return "bg-blue-50 border-blue-200 text-blue-800"
      }
    }

    const getIcon = () => {
      switch (variant) {
        case "success":
          return "✅"
        case "error":
          return "❌"
        case "warning":
          return "⚠️"
        default:
          return "ℹ️"
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg border p-4 shadow-lg transition-all duration-300",
          getVariantClasses(),
          className
        )}
        {...props}
      >
        <span className="text-lg">{getIcon()}</span>
        <span className="text-sm font-medium">{message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto text-lg hover:opacity-70"
          >
            ×
          </button>
        )}
      </div>
    )
  }
)
Toast.displayName = "Toast"

export { Toast }
