import { cn } from '@/lib/utils';

type Props = {
    text: string;
    className?: string;
    onClick: () => void;
    prefixIcon?: React.ReactNode;
}

export const PrimaryButton = (props: Props) => {
    return (
        <button className={
            cn(
                "flex place-items-center place-content-center",
                "px-8 py-2",
                "rounded-md",
                "text-center",
                "font-semibold",
                "gap-1",
                "bg-primary text-white",
                props.className,
            )
        } onClick={props.onClick}>
            {props.prefixIcon}
            {props.text}
        </button >
    )
}
