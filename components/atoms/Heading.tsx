import { cn } from '@/lib/utils';
import React from 'react'

type HeadingProps = {
    children: React.ReactNode;
    className?: string;
}

export const Heading = (props: HeadingProps) => {
    return (
        <h3
            className={cn(
                "text-lg font-semibold text-gray-800 dark:text-white py-2",
                props.className
            )}
        >
            {props.children}
        </h3>
    );
}
