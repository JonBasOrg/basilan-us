import { cn } from "@/lib/utils";
import { statusStyles, statusDot, type ProjectStatus } from "@/content/projects";

export function StatusBadge({
  status,
  className,
  pulse = false,
}: {
  status: ProjectStatus;
  className?: string;
  pulse?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        statusStyles[status],
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
              statusDot[status]
            )}
          />
        )}
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", statusDot[status])} />
      </span>
      {status}
    </span>
  );
}
