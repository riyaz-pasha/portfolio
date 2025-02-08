import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    text: string;
    className?: string;
    onClick: () => void;
    prefixIcon?: React.ReactNode;
    children?: React.ReactNode;
}
export const SecondaryButton = (props: Props) => {
    return (
        <button className={
            cn(
                "flex place-items-center place-content-center",
                "px-8 py-2",
                "rounded-md",
                "text-center",
                "font-semibold",
                "hover:font-bold",
                "gap-1",
                "text-secondaryText",
                "neumorphic",

                props.className,
            )
        } onClick={props.onClick}>
            {props.prefixIcon}
            {props.text}
            {props.children}
        </button >
    )
}
