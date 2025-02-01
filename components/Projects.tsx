import { projects } from '@/local/Project'
import { SectionContainer } from './atoms/SectionContainer'
import { Text } from './atoms/Text'
import { ProjectCard } from './molecules/ProjectCard'

export const Projects = () => {
    return (
        <SectionContainer>
            <Text text="Projects" />
            <div className='flex flex-wrap justify-center items-center p-4 gap-4'>

                {projects.map((project, index) => <ProjectCard
                    key={index}
                    title={project.name}
                    highlights={project.highlights}
                />)}
            </div>
        </SectionContainer>
    )
}
