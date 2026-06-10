import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex rounded-full border border-border bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-primary-soft", className)} {...props} />;
}
