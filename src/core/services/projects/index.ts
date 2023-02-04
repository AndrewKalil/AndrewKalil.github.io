import { ProjectsApi } from "../../api/projects";
// import { PROJECTS } from "../../data";

const projectsApi = new ProjectsApi("projects");

// export const setProjects = () => projectsApi.put(PROJECTS);

export const getProjects = () => projectsApi.get();
