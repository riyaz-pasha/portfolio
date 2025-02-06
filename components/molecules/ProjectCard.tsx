import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Card } from "../atoms/Card";
import { Heading } from "../atoms/Heading";

type ProjectCardProps = {
    id: number | string
    key: number | string
    title: string
    img: string
    highlights: string[]
}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Card key={props.id}>
            <div className="relative flex items-center justify-center overflow-hidden h-[30vh]">
                <Image fill src={props.img} alt="/p1.svg" />
            </div>

            <Heading>{props.title}</Heading>
            {
                props.highlights
                    .map((highlight, index) => <CardDescription key={index}>
                        {highlight}
                    </CardDescription>)
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
                "list-item text-sm max-w-sm m-2 ps-1",
                className
            )}
        >
            {children}
        </p>
    );
};
