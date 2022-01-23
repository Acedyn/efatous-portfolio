const fs = require('fs');
const path = require('path');

const PROJECT_ROOT_DIR = "./public/projects";

function getProjects() {
  const projects = [];
  fs.readdirSync(PROJECT_ROOT_DIR).forEach((project) => {
    const projectPath = path.join(PROJECT_ROOT_DIR, project);

    if(fs.lstatSync(projectPath).isDirectory()) {
      projects.push(project);
    }
  });

  return projects;
}

function getProjectContent(project) {
  const projectName = project;
  let projectMarkdown = "";
  const projectMedia = [];

  const projectPath = path.join(PROJECT_ROOT_DIR, project);

  fs.readdirSync(projectPath).forEach((projectData) => {
    let projectDataPath = path.join(projectPath, projectData);
    projectDataPath = projectDataPath.split(path.sep).join(path.posix.sep);
    projectDataPath = projectDataPath.replace("public", "");

    if(path.extname(projectData) === ".md") {
      projectMarkdown = projectDataPath;
      return
    }
    else {
      projectMedia.push(projectDataPath);
    }
  });
  
  return {
    "name": projectName,
    "doc": projectMarkdown,
    "media": projectMedia,
  }
}

function writeProjectContent(projectsData) {
  const projectListPath = path.join(PROJECT_ROOT_DIR, "projects.json");
  fs.writeFileSync(projectListPath, JSON.stringify(projectsData));
}

function main() {
  let projectsData = []
  getProjects().forEach((project) => {
    projectsData.push(getProjectContent(project));
  });

  writeProjectContent(projectsData);
}

if (require.main === module) {
  main();
}
