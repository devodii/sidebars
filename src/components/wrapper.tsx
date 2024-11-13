import { useSidebar } from "@/hooks/use-side-bar";
import { cn } from "@/utils/tw-merge";
import type { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<"div"> {
  children: ReactNode;
}

export const Wrapper = ({ children, className, ...forwardedProps }: Props) => {
  const { state } = useSidebar();

  return (
    <div
      className={cn(
        `flex h-screen w-[calc(100vw-0px)] items-center justify-center overflow-x-hidden bg-white transition-all duration-100 md:w-[80vw]`,
        state == "open"
          ? "md:ml-[180px] md:w-[calc(99.5vw-180px)]"
          : "md:ml-[60px] md:w-[calc(99vw-50px)]",
        className
      )}
      {...forwardedProps}
    >
      {children}
    </div>
  );
};
