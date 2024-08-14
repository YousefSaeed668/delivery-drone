import { cn } from "@/lib/utils";
import { IconNode } from "lucide";

interface ButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <a
      href=""
      className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-black group"
    >
      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-black rounded-full"></span>
      <span
        className={cn(
          "relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white",
          props.className
        )}
      >
        {children}
      </span>
    </a>
  );
}
