import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    children: React.ReactNode;
    className?: string;
}

export const SectionHeader = (props: Props) => {
    return (
        <p
            className={cn(
                "text-4xl font-bold",
                props.className
            )}
        >{props.children}</p>
    )
}
