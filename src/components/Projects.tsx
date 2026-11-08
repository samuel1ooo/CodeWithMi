/*
Title:
    Projects.tsx
Description:
    Renders the project collection using individual project cards.
Authors:
    Oluwapelumi Samuel Coker
*/

import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects(){
    return (
        <section>
            {projectsData.map( (project) => (
            <ProjectCard
                key={project.id}
                project={project}
                />
            ))}
        </section>
    )
}
