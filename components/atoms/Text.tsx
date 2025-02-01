import React from 'react'

type Props = {
    text: string
}

export const Text = (props: Props) => {
    return (
        <p>{props.text}</p>
    )
}
