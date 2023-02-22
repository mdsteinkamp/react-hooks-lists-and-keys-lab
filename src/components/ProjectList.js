import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
	console.log(projects);
	const technologies = projects.map(project => project.technologies)
	const projectItems = projects.map(project => {
		return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies.map(tech => {
			return tech
		})} />
	})

		return (
		<div id="projects">
		<h2>My Projects</h2>
		<div id="project-list">
		{projectItems}
		</div>
		</div>
	);
}

export default ProjectList;

{/* <ProjectItem technologies={technologies} /> */}

{/* <ProjectItem name={projectItems.name} about={projectItems.about} technologies={technologies} /> */}