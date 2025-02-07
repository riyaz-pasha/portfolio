"use client"
import Image from 'next/image'
import { PrimaryButton } from './atoms/PrimaryButton'
import { SectionContainer } from './atoms/SectionContainer'
import { cn } from '@/lib/utils'

export const Intro = () => {
    return (<SectionContainer id='intro'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='p-4 content-center'>
                <p className='text-2xl'>Hi,</p>
                <p className='font-bold text-4xl'>I&apos;m Riyaz</p>
                <p className='mt-4 font-semibold text-xl'>Full Stack Engineer</p>

                <p className='mt-4'>Software Engineer with experience in designing, developing and modernizing web and mobile applications.</p>

                <div className='mt-4 grid gap-4'>
                    <button className={
                        cn(
                            "min-w-60",
                            "flex place-items-center place-content-center",
                            "px-8 py-2",
                            "rounded-md",
                            "text-center",
                            "font-semibold",
                            "gap-1",
                            "bg-secondaryBackground text-secondaryText",
                        )}
                    > Download Resume</button>
                    <PrimaryButton
                        prefixIcon={<Image
                            src={"/clipboard.svg"}
                            alt={''}
                            width={24}
                            height={24}
                        />}
                        text='Copy email address'
                        onClick={() => ''} />
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
