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
        className
      )}
      key={id}
    >
      {children}
    </div>
  );
};
