"use client";
import { contactDetails, email, mobile } from '@/local/Contact';
import Image from 'next/image';
import { SectionContainer } from './atoms/SectionContainer';
import { SectionHeader } from './atoms/SectionHeader';
import { LinkPreview } from './ui/LinkPreview';

export const Contact = () => {

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
        <SectionContainer id="contact">
            <SectionHeader>
                Get in Touch
            </SectionHeader>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className=''>
                    <Image
                        src={"/getInTouch.svg"}
                        // unoptimized
                        width={400}
                        height={400}
                        alt={''} />
                </div>
                <div className='p-4'>
                    <p className='font-semibold text-lg'>Interested in working together or just want to say hello? Feel free to reach out!</p>

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
                </div>
            </div>
        </SectionContainer>
    )
}
