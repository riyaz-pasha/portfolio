import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    id: string
    children: React.ReactNode;
    className?: string
}

export const SectionContainer = ({ id, children, className }: Props) => {
    return (
        <section id={id}
            className={cn(
                "w-full min-h-screen",
                className
            )}
        >
            {children}
        </section>
    )
}
