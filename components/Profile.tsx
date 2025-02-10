import { cn } from '@/lib/utils'
import Image from 'next/image'
import { SectionContainer } from './atoms/SectionContainer'
import { SectionHeader } from './atoms/SectionHeader'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

export const Profile = () => {
    return (
        <SectionContainer id="profile" className='content-center justify-center max-w-screen-lg'>
            <SectionHeader className={""}>About me</SectionHeader>

            <BentoGrid className='mt-4'>
                <BentoGridItem parentClass='items-center justify-center border-none'>
                    <Image
                        src={"/riyaz.png"}
                        width={260}
                        height={260}
                        alt={'Riyaz profile photo'}
                        style={{ borderRadius: '50%', }}
                        className={cn(
                            'rounded-full border-4 border-secondaryBackground',
                            "neumorphic",
                        )}
                    />
                </BentoGridItem>
                <BentoGridItem parentClass='md:col-span-3 justify-center border-none'>
                    <p className="leading-relaxed">
                        I am a <span className="font-bold text-primary">Full-Stack Software Engineer</span> with <span className="font-semibold">5 years of experience</span> in designing, developing, and modernizing web and mobile applications.
                        <br /><br />
                        Proficient in <span className="font-bold">TypeScript, React, Node.js, Java, and AWS</span>,
                        I specialize in <span className="font-semibold ">building scalable, high-performance applications</span> with a focus on <span className="font-semibold">cloud-based solutions and modern architectures</span> while following Agile and XP practices.
                        <br /><br />
                        Passionate about solving complex technical challenges, optimizing performance, and exploring emerging technologies to improve development workflows.
                    </p>
                </BentoGridItem>

                <BentoGridItem parentClass='border-none' />
                <Highlight
                    text={'5'}
                    subText={'years of experience'}
                    img={'/coding.svg'}
                />
                <Highlight
                    text={'7'}
                    subText={'Projects worked'}
                    img={'/programming.svg'}
                />
                <Highlight
                    text={'5'}
                    subText={'Clients'}
                    img="/teamCollaboration.svg"
                />

            </BentoGrid>
        </SectionContainer>
    )
}

const Highlight = ({ text, subText, img }: { text: string, subText: string, img: string }) => {
    return <BentoGridItem parentClass='border-none mt-4 grid content-center justify-center'>
        <div className='content-center w-full h-44'>
            <Image src={img} width={360} height={360} alt={''} className='fixed-size' />
        </div>
        <div className='text-center'>
            <p className='text-4xl font-semibold'>{text}</p>
            <p>{subText}</p>
        </div>
    </BentoGridItem>
}

