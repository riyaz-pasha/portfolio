import Image from 'next/image'
import { SectionContainer } from './atoms/SectionContainer'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { SectionHeader } from './atoms/SectionHeader'

export const Profile = () => {
    return (
        <SectionContainer id="profile" className='content-center justify-center max-w-screen-lg'>
            <SectionHeader className={"ms-12"}>About me</SectionHeader>

            <BentoGrid className='mt-4'>
                <BentoGridItem parentClass='items-center justify-center border-none'>
                    <Image
                        src={"/riyaz.png"}
                        width={160}
                        height={160}
                        alt={'Riyaz profile photo'}
                        style={{ borderRadius: '50%', }}
                    />
                </BentoGridItem>
                <BentoGridItem parentClass='col-span-3 justify-center border-none'>
                    <p>Software Engineer with experience in designing, developing and modernizing web and mobile applications.
                        <br /><br />
                        Skilled in both frontend and backend development, with a focus on building scalable solutions and following Agile and XP practices.
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

