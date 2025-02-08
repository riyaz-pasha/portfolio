"use client";
import { useClipboard } from '@/hooks/useClipboard';
import { email } from '@/local/Contact';
import Image from 'next/image';
import { useState } from 'react';
import { PrimaryButton } from './atoms/PrimaryButton';
import { SecondaryButton } from './atoms/SecondaryButton';
import { SectionContainer } from './atoms/SectionContainer';

export const Intro = () => {

    const [downloaded, setDownloaded] = useState(false);
    const { copied, handleCopy } = useClipboard(email);

    const onDownload = () => {
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 1000);
    }

    return (<SectionContainer id='intro'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='p-4 content-center'>
                <p className='text-2xl'>Hi,</p>
                <p className='font-bold text-4xl'>I&apos;m Riyaz</p>
                <p className='mt-4 font-semibold text-xl'>Full Stack Engineer</p>

                <p className='mt-4'>Software Engineer with experience in designing, developing and modernizing web and mobile applications.</p>

                <div className='mt-4 grid gap-4'>
                    <a
                        href={"/Riyaz_Resume.pdf"}
                        download={"Riyaz_Resume.pdf"}
                    >
                        <SecondaryButton
                            text='Download Resume'
                            prefixIcon={<Image
                                src={downloaded ? "/tick-dark.svg" : "/download.svg"}
                                alt={''}
                                width={18}
                                height={18}
                            />}
                            onClick={onDownload}
                        >

                        </SecondaryButton>
                    </a>
                    <div>
                        <PrimaryButton
                            prefixIcon={<Image
                                src={copied ? "/tick.svg" : "/clipboard-white.svg"}
                                alt={''}
                                width={18}
                                height={18}
                            />}
                            text='Copy email address'
                            onClick={handleCopy} />
                    </div>
                </div>
            </div>
            <div className='col-span-2'>
                <Image
                    src={"/home_hello.svg"}
                    // unoptimized
                    width={800}
                    height={800}
                    alt={''} />
            </div>
        </div>
    </SectionContainer >
    )
}
