import {projects} from "../../../data/projects";

export default function handler({query: {name}}, res) {
  const project = projects.filter((project) => project.name === name);

  if (project.length > 0) {
    res.status(200).json(project[0]);
  } else {
    res.status(404).json({message: 'Could not find project'})
  }
}
