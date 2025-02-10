import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className={cn(
            "grid grid-cols-1 auto-rows-min md:grid-cols-4 gap-4 max-w-7xl mx-auto",
            className
        )}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    children,
    parentClass,
}: {
    className?: string;
    parentClass?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className={cn(
            "overflow-hidden row-span-1 rounded-3xl group/bento bg-transparent border justify-between flex flex-col space-y-4 ",
            parentClass
        )}>
            <div className={cn("p-6 group-hover/bento:translate-x-2 transition duration-200", className)}>
                {children}
            </div>
        </div >
    );
};
