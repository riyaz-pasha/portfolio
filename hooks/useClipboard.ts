"use client";
import { useState } from 'react';

export const useClipboard = (textToCopy: string) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return {
        copied,
        handleCopy
    };
};
