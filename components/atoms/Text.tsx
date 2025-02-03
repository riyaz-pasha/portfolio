import React from 'react'

type Props = {
    text?: string
    children?: string | React.ReactNode;
    className?: string;
}

export const Text = (props: Props) => {
    return (
        <p className={props.className}>{props.text || props.children}</p>
    )
}
