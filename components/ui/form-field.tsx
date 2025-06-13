import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Label } from "./label"

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  helperText?: string
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="space-y-2">
        <Label htmlFor={fieldId} className="text-sm font-medium text-gray-700">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <input
          ref={ref}
          id={fieldId}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors",
            error && "border-red-500 focus:ring-red-500",
            className,
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${fieldId}-error`} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${fieldId}-helper`} className="text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  },
)

FormField.displayName = "FormField"
