"use client";
import { contactDetails, email, mobile } from '@/local/Contact'
import Image from 'next/image'
import { useState } from 'react'
import { SectionContainer } from './atoms/SectionContainer'
import { LinkPreview } from './ui/LinkPreview'
import { PrimaryButton } from './atoms/PrimaryButton';
import { SectionHeader } from './atoms/SectionHeader';

export const Contact = () => {

    const [copied, setCopied] = useState(false);
    const textToCopy = email;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };


    return (
        <SectionContainer id="Contact">
            <SectionHeader>
                Get in Touch
            </SectionHeader>
            <p className='mt-10'>Interested in working together or just want to say hello? Feel free to reach out!</p>

            <div className='mt-4 flex gap-1 items-center'>
                <Image
                    src={"/icons8-gmail.svg"}
                    alt={''}
                    width={24}
                    height={24}
                />
                <p className='font-semibold'>Gmail:</p>
                <button
                    onClick={handleCopy}
                    className='flex gap-1 items-center'
                >
                    <Image
                        src={"/clipboard.svg"}
                        alt={''}
                        width={24}
                        height={24}
                    />
                    <p className=''>{email}</p>
                </button>
            </div>
            <div className='mt-4 flex gap-1 items-center'>
                <Image
                    src={"/mobile-phone.svg"}
                    alt={''}
                    width={24}
                    height={24}
                />
                <p className='font-semibold'>Mobile:</p>
                <button
                    onClick={handleCopy}
                    className='flex gap-1 items-center'
                >
                    <Image
                        src={"/clipboard.svg"}
                        alt={''}
                        width={24}
                        height={24}
                    />
                    <p className=''>{mobile}</p>
                </button>
            </div>
            <div className='mt-10 flex'>
                {
                    contactDetails.map(details => {
                        return <div key={details.name} className='me-2'>
                            <LinkPreview className="font-bold" url={details.url}>
                                <Image
                                    src={details.img}
                                    alt={details.name}
                                    width={30}
                                    height={30}
                                />
                            </LinkPreview>
                        </div>
                    })
                }
            </div>
        </SectionContainer>
    )
}
