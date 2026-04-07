import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: ReactNode
  className?: string
  py?: string
}

export function Container({ 
  children, 
  className = "",
  py = "py-16 md:py-24"
}: ContainerProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 md:px-6", py, className)}>
      {children}
    </div>
  )
}