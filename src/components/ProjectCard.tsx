/*
Title:
    ProjectCard.tsx
Description:
    Displays a project's details, technologies, status, and repository link.
Authors:
    Oluwapelumi Samuel Coker
*/

import type { Project } from "../data/projects"

// Create Component Props incase I want to further extend apart from initailly defined Project interface
interface ProjectCardProps{
    project: Project;
}

// Display the Project details
export function ProjectCard({ project }: ProjectCardProps){
    return (
        <article>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul >
                {project.technologies.map((tech) => (
                    <li key={tech}> {tech} </li>
                ))}
            </ul>
            <p>{project.category}</p>
            
            {/* Display approprriate Status */}
            <p>
                { project.status === "Completed"
                        ? "✓ Completed"
                        : project.status === "In Progress"
                        ? "◷ In Progress" : "Planned"
                } 
            </p>

           {/* Check that GitHub link is not empty */}
            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on Github
                </a>
            )}
        </article>
    )
}
