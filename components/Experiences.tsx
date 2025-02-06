import { educationDetails } from '@/local/Education'
import { workExperiences } from '@/local/WorkExperience'
import { SectionContainer } from './atoms/SectionContainer'
import { SectionHeader } from './atoms/SectionHeader'
import { Timeline, TimelineItem } from './molecules/Timeline'

export const Experiences = () => {
    return (
        <SectionContainer id="Experiences">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                <div>
                    <SectionHeader className={""}>Experience</SectionHeader>
                    <Timeline className={"mt-12"}>
                        {
                            workExperiences.map(detail => {
                                return <TimelineItem key={detail.role}>
                                    <p className='text-secondaryText text-sm'>
                                        {detail?.duration?.start?.year}
                                        -
                                        {
                                            detail?.duration?.isOngoing
                                                ? "Current"
                                                : detail?.duration?.end?.year
                                        }
                                    </p>
                                    <p className='mt-1 text-lg font-bold'>
                                        {detail.organization.name}
                                    </p>
                                    <p className='font-medium italic'>{detail.role}</p>
                                    <div className=''>
                                        {
                                            detail.competencies.map(s => {
                                                return <span key={s}
                                                    className="inline-flex me-1 mt-1 items-center rounded-md bg-secondaryBackground px-2 py-1 text-xs font-medium">
                                                    {s}
                                                </span>
                                            })
                                        }
                                    </div>
                                </TimelineItem>
                            })
                        }
                    </Timeline>
                </div>
                <div>
                    <SectionHeader>Education</SectionHeader>
                    <Timeline className={"mt-12"}>
                        {
                            educationDetails.map(detail => {
                                return <TimelineItem key={detail.course}>

                                    <p className='text-secondaryText text-sm'>
                                        {detail?.duration?.start?.year}
                                        -
                                        {
                                            detail?.duration?.isOngoing
                                                ? "Current"
                                                : detail?.duration?.end?.year
                                        }
                                    </p>
                                    <p className='mt-1 text-lg font-bold'>
                                        {detail.institutionName}
                                    </p>
                                    <p className='font-medium italic'>{detail.course}</p>
                                    <p className='font-medium'>{detail.specification}</p>
                                    <span
                                        className="inline-flex me-1 mt-1 items-center rounded-md bg-secondaryBackground px-2 py-1 text-xs font-medium">
                                        {detail.cgpa}
                                    </span>
                                </TimelineItem>
                            })
                        }
                    </Timeline>
                </div>
            </div>
        </SectionContainer>
    )
}
