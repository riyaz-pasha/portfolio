import { cn } from "@/lib/utils";
import { Card } from "../atoms/Card";

type TimelineProps = {
    children: React.ReactNode;
    className?: string;
};

export function Timeline({ children, className }: TimelineProps) {
    return (
        <div className={cn(className)}>
            <div className="relative px-1">
                <div className="absolute h-full border border-dashed border-opacity-20 border-black"></div>
                {children}
            </div>
        </div>
    );
}

export function TimelineItem({ children }: { children: React.ReactNode; }) {
    return <div className="flex w-full my-6 -ml-1.5">
        <div className="w-1/12 z-10">
            <div className="w-3.5 h-3.5 my-1 bg-black rounded-full"></div>
        </div>
        <div className="w-11/12">
            <Card>
                {children}
            </Card>
        </div>
    </div>;
}
