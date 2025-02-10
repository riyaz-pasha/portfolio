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
                "w-full min-h-screen max-w-screen-lg content-center justify-center p-8",
                className
            )}
        >
            {children}
        </section>
    )
}
