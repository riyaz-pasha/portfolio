import { educationDetails } from '@/local/Education'
import { Heading } from './atoms/Heading'
import { SectionContainer } from './atoms/SectionContainer'
import { Text } from './atoms/Text'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { workExperiences } from '@/local/WorkExperience'
import { Timeline, TimelineItem } from './molecules/Timeline'

export const About = () => {
    return (
        <SectionContainer id="about" className='items-center justify-center max-w-screen-lg'>
            <BentoGrid>
                <BentoGridItem className='col-span-3 row-span-2' >
                    <Heading>About me</Heading>
                    <Text>Software Engineer with experience in designing, developing and modernizing web and mobile applications.
                        <br /><br />  Skilled in both frontend and backend development, with a focus on building scalable solutions and following Agile and XP practices.
                    </Text>
                </BentoGridItem>
                <BentoGridItem>
                    <Heading>5</Heading>
                    <Text>years of experience</Text>
                </BentoGridItem>
                <BentoGridItem >
                    <Heading>6+</Heading>
                    <Text>Projects</Text>
                </BentoGridItem>
                <BentoGridItem >
                    <Heading>Frontend</Heading>
                    <Text>ReactJs</Text>
                    <Text>NextJs</Text>
                </BentoGridItem>
                <BentoGridItem >
                    <Heading>Backend</Heading>
                    <Text>ExpressJS</Text>
                    <Text>Spring Boot</Text>
                </BentoGridItem>
                <BentoGridItem >
                    <Heading>Databases</Heading>
                    <Text>PostgresSQL</Text>
                    <Text>MongoDB</Text>
                    <Text>Redis</Text>
                </BentoGridItem>
                <BentoGridItem >
                    <Heading>Others</Heading>
                    <Text>AWS</Text>
                    <Text>git</Text>
                </BentoGridItem>
                <BentoGridItem className='col-span-2'>
                    <Heading>Experience</Heading>
                    <Timeline>
                        {
                            workExperiences.map(detail => {
                                return <TimelineItem key={detail.role}>
                                    <Text>{detail.organization.name}</Text>
                                    <Text>{detail.role}</Text>
                                    <Text>{detail.competencies}</Text>
                                </TimelineItem>
                            })
                        }
                    </Timeline>
                </BentoGridItem>
                <BentoGridItem className='col-span-2'>
                    <Heading>Education</Heading>
                    <Timeline>
                        {
                            educationDetails.map(detail => {
                                return <TimelineItem key={detail.course}>
                                    <Text>{detail.institutionName}</Text>
                                    <Text>{detail.course}</Text>
                                    <Text>{detail.specification}</Text>
                                    <Text>{detail.cgpa}</Text>
                                </TimelineItem>
                            })
                        }
                    </Timeline>
                </BentoGridItem>
                <BentoGridItem className='col-span-2'>
                    <Heading>Email</Heading>
                    <Text>riyazpasha880@gmail.com</Text>
                </BentoGridItem>
            </BentoGrid>
        </SectionContainer>
    )
}
