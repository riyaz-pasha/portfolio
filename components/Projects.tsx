import { projects } from '@/local/Project'
import { SectionContainer } from './atoms/SectionContainer'
import { SectionHeader } from './atoms/SectionHeader'
import { ProjectCard } from './molecules/ProjectCard'

export const Projects = () => {
    return (
        <SectionContainer id="projects">
            <SectionHeader>Projects</SectionHeader>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 mt-12'>
                {projects.map((project, index) => <ProjectCard
                    key={index}
                    id={index}
                    title={project.name}
                    img={project.img}
                    highlights={project.highlights}
                />)}
            </div>
        </SectionContainer>
    )
}
