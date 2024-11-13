import { PropsWithChildren } from "react";
import { Sidebar } from "@/components/sidebar";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full min-w-screen min-h-screen bg-[#212121] text-white/90">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};
