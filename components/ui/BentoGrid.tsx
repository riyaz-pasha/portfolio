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
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div className={cn(
            "relative overflow-hidden row-span-1 rounded-3xl group/bento bg-transparent dark:border-white/[0.2] border justify-between flex flex-col space-y-4 ",
            className
        )}>
            <div className="p-6 group-hover/bento:translate-x-2 transition duration-200">
                {children}
            </div>
        </div >
    );
};
