import { cn } from "@/lib/utils";

interface MaxWidthProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MaxWidth({ children, ...props }: MaxWidthProps) {
  return (
    <div className={cn("w-full max-w-[1457px] mx-auto ", props.className)}>
      {children}
    </div>
  );
}
