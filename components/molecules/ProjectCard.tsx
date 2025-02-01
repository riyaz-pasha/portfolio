import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Card } from "../atoms/Card";
import { Heading } from "../atoms/Heading";

React
type ProjectCardProps = {
    key: number | string
    title: string
    highlights: string[]
}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Card>
            <div className="relative flex items-center justify-center overflow-hidden h-[30vh]">
                <Image fill src="/p1.svg" alt="bgimg" />
            </div>

            <Heading>{props.title}</Heading>
            {
                props.highlights
                    .map(highlight => <CardDescription>{highlight}</CardDescription>)
            }
        </Card>
    )
}

const CardDescription = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <p
            className={cn(
                "list-item text-sm text-neutral-600 dark:text-neutral-400 max-w-sm m-2 ps-1",
                className
            )}
        >
            {children}
        </p>
    );
};

const CardSkeletonContainer = ({
    className,
    children,
    showGradient = true,
}: {
    className?: string;
    children: React.ReactNode;
    showGradient?: boolean;
}) => {
    return (
        <div
            className={cn(
                "h-[15rem] md:h-[20rem] rounded-xl z-40",
                className,
                showGradient &&
                "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
            )}
        >
            {children}
        </div>
    );
};

