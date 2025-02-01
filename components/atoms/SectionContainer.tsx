import React from 'react';

type Props = {
    children: React.ReactNode;
}

export const SectionContainer = ({ children }: Props) => {
    return (
        <div className="w-full min-h-screen">
            {children}
        </div>
    )
}
