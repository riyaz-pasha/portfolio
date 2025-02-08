import { cn } from "@/lib/utils";
import React from "react";

type CardProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export const Card = ({
  className,
  children,
  id
}: CardProps) => {
  return (
    <div
      className={cn(
        "w-full mx-auto p-4 rounded-xl group",
        "neumorphic",
        // "shadow-[inset_1px_1px_1px_rgba(255,255,255,1),-2px_-2px_2px_rgba(255,255,255,0.9),-4px_-4px_6px_rgba(255,255,255,0.9),-8px_-8px_16px_rgba(255,255,255,0.9),-12px_-12px_24px_rgba(255,255,255,0.9),inset_-1px_-1px_1px_rgba(12,13,18,0.06),2px_2px_2px_rgba(12,13,18,0.08),4px_4px_6px_rgba(12,13,18,0.08),8px_8px_16px_rgba(12,13,18,0.08),12px_12px_24px_rgba(12,13,18,0.08)]",
        // "transition-all duration-300",
        // "hover:shadow-[inset_1px_1px_1px_rgba(255,255,255,1),-3px_-3px_3px_rgba(255,255,255,1),-5px_-5px_6px_rgba(255,255,255,1),-10px_-10px_16px_rgba(255,255,255,1),-14px_-14px_24px_rgba(255,255,255,1),inset_-1px_-1px_1px_rgba(12,13,18,0.06),3px_3px_3px_rgba(12,13,18,0.085),5px_5px_6px_rgba(12,13,18,0.085),10px_10px_16px_rgba(12,13,18,0.085),14px_14px_24px_rgba(12,13,18,0.085)]",
        className
      )}
      key={id}
    >
      {children}
    </div>
  );
};
